import Image from "next/image";
import Link from "next/link";

import profilePic from '../../../assets/img/its-me.jpg';
import blogPreviewPic from '../../../assets/img/blog/01.jpg';
import { getPostsFromContentful } from "@/lib/services/contentful";
import { BlogPaginator } from "./blogpaginator";
import { getPostsFromWordpress } from "@/lib/services/wordpess";

export async function BlogRoll({ page }: { page: number }) {

  const posts = await getPostsFromWordpress(page, 5);

  return (
    <>
      <div>
        {posts.posts.map((post) => (
          <article className="card border-0 shadow-sm overflow-hidden mb-4" key={post.slug}>
            <div className="row g-0">

              <div className="col-sm-4 position-relative bg-position-center bg-repeat-0 bg-size-cover">
                <Image className="col-sm-4 position-relative bg-position-center bg-repeat-0"
                  src={blogPreviewPic}
                  alt="Blog preview"
                  fill
                  style={{ objectFit: 'cover', }}>
                </Image>
              </div>

              <div className="col-sm-8">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <span className="fs-sm text-muted">{post.date}</span>
                  </div>
                  <h3 className="h4">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <span dangerouslySetInnerHTML={{__html: post.excerpt}}></span>
                  <hr className="my-4"></hr>
                  <div className="d-flex align-items-center justify-content-between">
                    <a href={`/blog/${post.slug}`} className="d-flex align-items-center fw-bold text-dark text-decoration-none me-3">
                      <Image src={profilePic} className="rounded-circle me-3" width={48} height={48} alt="Avatar" />
                      Joel Johnston
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </article>
        ))}
      </div>
      <BlogPaginator
        page={page}
        numPages={posts.totalPages} />
    </>
  );
}