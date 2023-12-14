import { PageHeader } from "../../../ui/page-header";
import { BlogRollSkeleton } from "../blogrollskeleton";

export default function Loading() {
  return (
    <div className="container">

      <PageHeader title="Blog" />

      <BlogRollSkeleton />

    </div>
  );
}