import { Entry, createClient } from "contentful";
import { environment } from "../environment";
import { Posts } from "../model/posts";
import { CfPage, CfPost, CfVMHome, CfVMServiceItem } from "../model/contentful";
import { Post } from "../model/post";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { parse } from 'node-html-parser';
import { NotFoundError } from "../model/app-error";
import { VMHome } from "../model/vm-home";
import { VMServices } from "../model/vm-services";
import { Page } from "../model/page";

const client = createClient(environment.contentful);

export async function getPageFromContentful(slug: string): Promise<Page | NotFoundError> {
  let result = await client.getEntries<CfPage>({
    limit: 1,
    content_type: "page",
    "fields.slug[match]": slug
  });
  if (result.items.length === 0) {
    return new NotFoundError(`Page with slug ${slug} not found`);
  }
  return convertPage(result.items[0]);
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

const convertPage = (pageDataSkeleton: Entry<CfPage, "WITHOUT_LINK_RESOLUTION", string>) => {
  const pageData = pageDataSkeleton.fields;
  let page = {
    slug: pageData.slug,
    title: pageData.title,
    content: pageData.legacyWordpressContent,
  } as Page;
  if (pageData.content) {
    page.content = documentToHtmlString(pageData.content, renderOptions);
  }
  return page;
};

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