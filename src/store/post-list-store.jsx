import { createContext, useCallback,useState,useEffect, useReducer } from "react";



export  const PostList=createContext(
    {
    
    postList:[],
    addPost:()=>{},
    deletePost:()=>{},
    addInitialPost:()=>{},

}
);

const postListReducer=(currPostList,action)=>{
  
    let newPostList=currPostList;
    if(action.type=="DELETE_POST"){
        newPostList=currPostList.filter(post => post.id !== action.payload.postId);
    }else if(action.type == "ADD_INITIAL_POSTS"){
       
        newPostList=action.payload.posts;

    }
    
    
    else if (action.type =="ADD_POST"){
      newPostList=[action.payload,...currPostList];
    }

    return newPostList;

}

const PostListProvider=({children})=>{

 

const [postList,dispatchPostList]=useReducer(postListReducer,[]);    

//  const [fetching, setFetching] = useState(true);

 
 

 const addPost=(post)=>{
  
    dispatchPostList({
      type:"ADD_POST",
      payload:post,
         
    });
}

const addInitialPost=useCallback((posts)=>{
 
    dispatchPostList({
        type:"ADD_INITIAL_POSTS",
        payload:{
            posts,
        }
    })

},[]);
    


const deletePost=useCallback((postId)=>{

    dispatchPostList({
        type:"DELETE_POST",
        payload:{
            postId,
        }
    })

},[dispatchPostList]);

// const arr=[8,4,3,9,21];
// const sortArr=useMemo(()=> arr.sort(),[arr]);


//  useEffect(() => {
//   const controller = new AbortController();

//   fetch("https://dummyjson.com/posts", { signal: controller.signal })
//     .then(res => res.json())
//     .then((data) =>{ 
//         addInitialPost(data.posts);
//         setFetching(false) 
//     })
//     .catch(err => {
//       if (err.name === "AbortError") {
//         //  Ignore this error, it just means the fetch was canceled
//             console.log("Fetch was aborted — safe to ignore");
//         } else {
//         //  Other errors (like network issues)
//         console.error("Fetch failed:", err);
//       }
//     });

//   return () => controller.abort(); // Cleanup when component unmounts
// }, [addInitialPost]);







return <PostList.Provider value={
   { postList,
    addPost,
    deletePost,
    
}
}>
   {children}
</PostList.Provider>
};






export default PostListProvider;