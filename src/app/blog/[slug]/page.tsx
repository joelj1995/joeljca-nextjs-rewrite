import { PageHeader } from "@/app/ui/page-header";
import { getPostFromContentful } from "@/lib/services/contentful";

export default async function BlogPostPage({ params }: { params: { slug: string } }) {

  // TODO: How do I set a 404 if post isn't found?
  const post = await getPostFromContentful(params.slug);

  return (
    <div className="container">

      <PageHeader
        title={post.title}
        subtitle={post.date.toDateString()}/>

      <section
        className="container mb-5 pt-1 pb-2">
        <div
          style={{ wordWrap: "break-word" }}
          dangerouslySetInnerHTML={{ __html: post.content }}>
        </div>
      </section>

    </div>
  );
}