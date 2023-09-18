import PostPreview from "./post_preview"
import { getAllPostPreviews } from "./lib/posts"

export default function Posts() {

  const postPreviews = getAllPostPreviews()

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