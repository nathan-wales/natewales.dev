
interface PostPreviewInterface{
  title: string;
  desc: string;
  postText: string;
}

export default function PostPreview(props: PostPreviewInterface){

  return (
    <div className="text-gray-300">
      <h1>{props.title}</h1>
      <div>
        <p>{props.desc}</p>
        <p>{props.postText}</p>
      </div>
    </div>
  )

}