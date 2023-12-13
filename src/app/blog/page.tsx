'use client';

import { getPostsFromContentful } from "@/lib/services/contentful";
import { BlogRoll } from "./blogroll";
import { BlogPaginator } from "./blogpaginator";
import { useSearchParams } from "next/navigation";
import { PageHeader } from "../ui/page-header";

export default async function BlogPage() {

  const searchParams = useSearchParams();
  const page = +(searchParams.get('page') ?? '1') ?? 1;
  const posts = await getPostsFromContentful(page, 5);

  return (
    <div className="container">
      <PageHeader title="Blog" />
      <BlogRoll posts={posts.posts} />
      <BlogPaginator page={page} numPages={posts.totalPages} />
    </div>
  )
}