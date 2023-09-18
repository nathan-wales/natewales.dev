import { getPost } from "../lib/posts"

export default function Page({ params }: { params: { id: string } }) {
  
  const postJson = getPost(+params.id);
  
  return (
    <div>
      <h1>{postJson.preview.title}</h1>
      <p>{postJson.postText}</p>
    </div>
    )
}