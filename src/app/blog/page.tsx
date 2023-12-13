import { getPostsFromContentful } from "@/lib/services/contentful";

export default async function BlogPage() {

  const posts = await getPostsFromContentful();

  return (
    <div className="container">
      <h1>Blog</h1>
      <p>{ posts.posts[0].title }</p>
    </div>
  )
}