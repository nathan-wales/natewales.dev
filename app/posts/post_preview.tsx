import Link from "next/link";

interface PostPreviewInterface{
  title: string;
  description: string;
  id: number;
}

export default function PostPreview(props: PostPreviewInterface){
  const postUrl = "/posts/" + props.id;

  return (
    <div className="text-gray-300">
      <h1>{props.title}</h1>
      <div>
        <p>{props.description}</p>
      </div>
      <Link href={postUrl}>Continue Reading</Link>
    </div>
  )

}