import { Entry, createClient } from "contentful";
import { environment } from "../environment";
import { Posts } from "../model/posts";
import { CfPost, CfVMHome, CfVMServiceItem } from "../model/contentful";
import { Post } from "../model/post";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { parse } from 'node-html-parser';
import { NotFoundError } from "../model/app-error";
import { sleep } from "../lib";
import { VMHome } from "../model/vm-home";
import { VMServices } from "../model/vm-services";

const client = createClient(environment.contentful);

export async function getPostFromContentful(slug: string): Promise<Post | NotFoundError> {
  let result = await client.getEntries<CfPost>({
    limit: 1,
    content_type: "post",
    "fields.slug": slug
  });
  if (result.items.length === 0) {
    return new NotFoundError(`Post with slug ${slug} not found`);
  }
  return convertPost(result.items[0]);
}

export async function getPostsFromContentful(page: number = 1, perPage: number = 5): Promise<Posts> {
  let result = await client.getEntries<CfPost>({
    limit: perPage,
    skip: (page - 1) * perPage,
    order: ['-fields.published'],
    content_type: "post"
  });
  await sleep(environment.extraLatency);
  return {
    posts: result.items.map(convertPost),
    totalPages: Math.ceil(result.total / perPage)
  } as Posts;
}

export async function getHomeViewModelFromContentful(version: number): Promise<VMHome | NotFoundError> {
  let result = await client.getEntries<CfVMHome>({
    limit: 1,
    content_type: "homePageViewModelV1",
    "fields.version": version
  });
  if (result.items.length === 0) {
    return new NotFoundError(`VMHome with version ${version} not found`);
  }
  const resultFields = result.items[0].fields;
  return {
    ...resultFields,
    aboutMe: documentToHtmlString(resultFields.aboutMe, renderOptions)
  } as VMHome;
}

export async function getServicesViewModelFromContentful(): Promise<VMServices> {
  let result = await client.getEntries<CfVMServiceItem>({
    content_type: "serviceItem",
  });
  return {
    services: result.items.map(item => item.fields).sort((a, b) => a.seq - b.seq)
  } as VMServices;
}

const convertPost = (postSkeletonData: Entry<CfPost, "WITHOUT_LINK_RESOLUTION", string>) => {
  const postData = postSkeletonData.fields;
  let post = {
    slug: postData.slug,
    title: postData.title,
    content: postData.legacyWordpressContent,
    excerpt: extractExcerpt(postData.legacyWordpressContent),
    date: new Date(postData.published)
  } as Post;
  if (postData.content) {
    post.content = documentToHtmlString(postData.content, renderOptions);
    post.excerpt = extractExcerpt(post.content);
  }
  return post;
};

const extractExcerpt = (htmlString: string): string => {
  const root = parse(`<div>${htmlString}</div>`);
  var extractedText = root.querySelector('p')?.textContent || '';
  return extractedText.slice(0, 287);
}

const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: any) =>
      `<img class="img-fluid" src="${node.data.target.fields.file.url}"/>`,
    [BLOCKS.TABLE]: (node: any, next: any) =>
      `<table class="table">${next(node.content)}</table>`
  },
  renderMark: {
    [MARKS.CODE]: (text: any) => `<p><code><pre>${text}</pre></code></p>`
  }
}