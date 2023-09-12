/*
1. function to gather all the posts id
2. function to grab individual post data
3. function to grab post preview info from each post
*/

import fs from "fs";
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'app/posts/posts/');

export function getAllPostIds(){
  const filenames = fs.readdirSync(postsDirectory);
  const ids:Array<number> = []

  //I know I know, why not just use the file name
  //
  //because I prefer number ids, thats it
  //but also because when I eventually move over to a db I don't want to have to change how this method is used
  filenames.forEach(filename => {
    ids.push(parseInt(filename.split(".")[0]))
  })

  return ids
}

function getAllPostPreviews(){

}

export function getPostPreview(id: number){
  ///Users/nathanwales/dev/personal-website/natewales.dev/app/posts/posts/1.json
  const jsonString = fs.readFileSync(postsDirectory + id.toString() + '.json', 'utf-8');
  const jsonData = JSON.parse(jsonString);
  return jsonData["preview"];
}

export function getPost(id: number){
  ///Users/nathanwales/dev/personal-website/natewales.dev/app/posts/posts/1.json
  const jsonString = fs.readFileSync(postsDirectory + id.toString() + '.json', 'utf-8');
  const jsonData = JSON.parse(jsonString);
  return jsonData;
}