import React, { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
import { Form, redirect, useNavigate } from "react-router-dom";

const CreatePost = () => {
  // const { addPost } = useContext(PostList);  
  const navigate=useNavigate();


  // const userIdElement = useRef();
  // const postTitleElement = useRef();
  // const postBodyElement = useRef();
  // const reactionElement = useRef();
  // const tagsElement = useRef();

  // const handleSubmit = (event) => {
  //   // event.preventDefault();
  //   // const userId = userIdElement.current.value;
  //   // const postTitle = postTitleElement.current.value;
  //   // const postBody = postBodyElement.current.value;
  //   // const reaction = reactionElement.current.value;
  //   // const tags = tagsElement.current.value.split(" ");

  //   // userIdElement.current.value = "";
  //   // postTitleElement.current.value = "";
  //   // postBodyElement.current.value = "";
  //   // reactionElement.current.value = "";
  //   // tagsElement.current.value = "";

    

  // };

  return (
    <Form method="POST" className="create-post" >
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter yout User Id Here
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          placeholder="Your User ID"
          name="userId"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you feeling Today"
          name="title"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          name="body"
          className="form-control"
          id="body" //Changes
          placeholder="Tell us about more"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of Reactions
        </label>
        <input
          type="text"
          name="reactions"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this Post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your Tags Here
        </label>
        <input
          type="text"
          name="tags"
          className="form-control"
          id="tags"
          placeholder="Please Enter tags using Space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};

export async function createPostAction (data){

  const formData=await data.request.formData();
  const postData=Object.fromEntries(formData);
  postData.tags=postData.tags.split(" ");
  console.log(postData);
   
//   return fetch("https://dummyjson.com/posts/add", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     title: postTitle,
//     body: postBody,
//     reactions: reaction, //  fixed
//     userId:Number(userId),
//     tags: tags,
//   }),
// })
//   .then((res) => res.json())
//   .then(post => addPost(post));
//   navigate("/");
 
return redirect("/");

}

export default CreatePost;
