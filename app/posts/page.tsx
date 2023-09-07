import PostPreview from "./post_preview"

export default function Posts(){
    
  return (    
    <main>
      <div className=" text-blue-700 font-thin italic">
        Posts will go here for sure
        <div className="flex gap-4">
          <PostPreview title={"YO"} desc={"does this work?"} postText={"yeah it does!"}/>
          <PostPreview title={"POST2"} desc={"hell right?"} postText={"brother!"}/>
        </div>
      </div>
    </main>
  )
}