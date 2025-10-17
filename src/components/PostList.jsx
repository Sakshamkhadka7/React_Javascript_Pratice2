import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import Welcome from "./Welcome";
import LoadingSpinner from "./LoadingSpinner";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
 const postList= useLoaderData();
 
   
 // useEffect(() => {
  //   setFetching(true);
  //   const controller=new AbortController();
  //   const signal=controller.signal;

  //   fetch("https://dummyjson.com/posts",{signal})
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPost(data.posts); // data.posts is an array
  //       setFetching(false);
  //     });
     
  //     return ()=>{
  //       console.log("Cleaning up UseEffect");
  //       controller.abort();
  //     };
       

  // }, []);



  return (
    <>
      {  <LoadingSpinner />}

      {postList.length === 0 && <Welcome />}
      {postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export const postLoader=()=>{
  return  fetch("https://dummyjson.com/posts")
    .then(res => res.json())
    .then((data) =>{ 
        return data.posts
    });
}


export default PostList;
