import { NotFoundError } from "@/lib/model/app-error";
import { getPageFromWordpress } from "@/lib/services/wordpess";
import { PageHeader } from "@/ui/page-header";

export default async function Page({ params }: { params: { slug: string } }) {

  const page = await getPageFromWordpress(params.slug);

  if (page instanceof NotFoundError) {
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
        title={ page.title } />

      <section
        className="container mb-5 pt-1 pb-2">
        <div
          style={{ wordWrap: "break-word" }}
          dangerouslySetInnerHTML={{ __html: page.content }}>
        </div>
      </section>

    </div>
  );
}