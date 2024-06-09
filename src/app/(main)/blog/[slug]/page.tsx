import { PageHeader } from "@/ui/page-header";

import { NotFoundError } from "@/lib/model/app-error";
import { getPostFromWordpress } from "@/lib/services/wordpess";
import { formatDate } from "@/lib/lib";

export default async function BlogPostPage({ params }: { params: { slug: string } }) {

  const post = await getPostFromWordpress(params.slug);

  if (post instanceof NotFoundError) {
    return (
      <div className="container">
        <PageHeader
          title="Not Found"
          subtitle="Sorry, we couldn't find that post."/>
      </div>
    );
  }

  return (
    <div className="container">

      <PageHeader
        title={post.title}
        subtitle={formatDate(post.date)}/>

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