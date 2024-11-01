import React from 'react';
import { Link } from 'react-router-dom';

function PostList({ posts, deletePost }) {
  return (
    <div>
      <h1>Post List</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
            <span> </span> 
            <button onClick={() => deletePost(post.id)}>Delete</button>
            <span> </span> 
            <Link to={`/posts/edit/${post.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
