import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditPost({ posts, updatePost }) {
  const { id } = useParams();
  const post = posts.find(post => post.id === Number(id));
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePost(Number(id), { id: Number(id), title, content });
    navigate('/posts');
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Content:
          <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        </label>
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default EditPost;
