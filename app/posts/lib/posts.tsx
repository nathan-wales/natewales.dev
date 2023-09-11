/*
1. function to gather all the posts id
2. function to grab individual post data
3. function to grab post preview info from each post
*/

import fs from "fs";
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'app/posts/posts/');

function getAllPostIds(){

}

export function getPost(id: number){
  ///Users/nathanwales/dev/personal-website/natewales.dev/app/posts/posts/1.json
  const jsonString = fs.readFileSync(postsDirectory + id.toString() + '.json', 'utf-8');
  const jsonData = JSON.parse(jsonString);
  return jsonData
}