import PostPreview from "./post_preview"
import { getPostPreview, getAllPostIds } from "./lib/posts"

export default function Posts() {

  const postIds: Array<number> = getAllPostIds()
  console.log(postIds)
  const testPost = getPostPreview(postIds[0]);

  return (
    <main>
      <div className=" text-blue-700 font-thin italic">
        Posts will go here for sure
        <div className="flex gap-4">
          <PostPreview {...testPost} />
        </div>
      </div>
    </main>
  )
}