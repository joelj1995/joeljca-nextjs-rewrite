import { BlogRoll } from "./blogroll";
import { PageHeader } from "../../../ui/page-header";
import { Suspense } from "react";
import { BlogRollSkeleton } from "./blogrollskeleton";

export default async function BlogPage({ searchParams }: { searchParams: { page?: number } }) {

  const page = searchParams.page ?? 1;


  return (
    <div className="container">

      <PageHeader title="Blog" />

      <Suspense fallback={<BlogRollSkeleton/>}>
        <BlogRoll
          page={ page } />
      </Suspense>

    </div>
  )
}