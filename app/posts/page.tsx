import PostPreview from "./post_preview"
import { getPostPreview, getAllPostIds } from "./lib/posts"

export default function Posts() {

  const postIds: Array<number> = getAllPostIds()
  const postPreviews = new Array;
  postIds.forEach( postId => {
    postPreviews.push(getPostPreview(postId));
  })

  return (
    <main>
      <div className=" text-blue-700 font-thin italic">
        Posts will go here for sure
        <div className="flex gap-4">
          {postPreviews.map((preview, i) => <PostPreview {...preview} key={i} />)}
        </div>
      </div>
    </main>
  )
}