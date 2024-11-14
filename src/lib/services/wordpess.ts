import { NotFoundError } from "../model/app-error";
import { Post } from "../model/post";
import { Posts } from "../model/posts";

const WP_API_URL = 'https://public-api.wordpress.com/rest/v1.1/sites/wp.joelj.ca';

export async function getPageFromWordpress(slug: string) {
  return await fetch(`${WP_API_URL}/posts?slug=${slug}&type=page`)
    .then(res => res.json())
    .then(json => {
      const posts = json.posts;
      if (posts.length == 0) {
        return new NotFoundError(`Post with slug ${slug} not found`);
      }
      return posts[0];
    });
}

export async function getPostsFromWordpress(page: number = 1, perPage: number = 5): Promise<Posts> {
  return await fetch(`${WP_API_URL}/posts?page=${page}&per_page=${perPage}`)
    .then(res => res.json().then(json => ({
      posts: json.posts,
      totalPages: Number(res.headers.get('X-WP-TotalPages'))
    })));
}

export async function getPostFromWordpress(slug: string): Promise<Post | NotFoundError> {
  return await fetch(`${WP_API_URL}/posts?slug=${slug}`)
    .then(res => res.json())
    .then(json => {
      const posts = json.posts;
      if (posts.length == 0) {
        return new NotFoundError(`Post with slug ${slug} not found`);
      }
      return posts[0];
    });
}