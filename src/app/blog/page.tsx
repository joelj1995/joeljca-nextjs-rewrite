'use server';

import { getPostsFromContentful } from "@/lib/services/contentful";
import { BlogRoll } from "./blogroll";
import { BlogPaginator } from "./blogpaginator";
import { PageHeader } from "../ui/page-header";

export default async function BlogPage({ searchParams }: { searchParams: { page?: number } }) {

  const page = searchParams.page ?? 1;
  const posts = await getPostsFromContentful(page, 5);

  return (
    <div className="container">

      <PageHeader title="Blog" />

      <BlogRoll
        posts={posts.posts} />

      <BlogPaginator
        page={page}
        numPages={posts.totalPages} />

    </div>
  )
}