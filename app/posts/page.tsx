import PostPreview from "./post_preview"
import {getPost} from "./lib/posts"

export default function Posts(){
    
  const testPost = getPost(1);

  return (    
    <main>
      <div className=" text-blue-700 font-thin italic">
        Posts will go here for sure
        <div className="flex gap-4">
          <PostPreview {...testPost}/>
          <PostPreview title={"YO"} description={"does this work?"} postText={"yeah it does!"}/>
          <PostPreview title={"POST2"} description={"hell right?"} postText={"brother!"}/>
        </div>
      </div>
    </main>
  )
}