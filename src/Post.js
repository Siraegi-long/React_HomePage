import React from 'react';
import { useParams } from 'react-router-dom';

function Post({ posts }) {
  let { postId } = useParams();
  const post = posts.find(p => p.id === Number(postId));

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}

export default Post;
