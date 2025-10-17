import React, { useContext } from 'react'
import { MdAutoDelete } from "react-icons/md";
import { PostList } from '../store/post-list-store'

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  const tags = Array.isArray(post.tags) ? post.tags : [];

  // Safely handle both number and object types
  const likes = post.reactions?.likes ?? post.reactions ?? 0;
  const dislikes = post.reactions?.dislikes ?? 0;

  return (
    <div className="card post-card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdAutoDelete />
          </span>
        </h5>

        <p className="card-text">{post.body}</p>

        {tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag">
            {tag}
          </span>
        ))}

        <div className="alert alert-success reactions" role="alert">
          👍 Likes: {likes} | 👎 Dislikes: {dislikes}
        </div>
      </div>
    </div>
  );
};

export default Post;
