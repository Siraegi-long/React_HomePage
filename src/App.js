import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import PostList from './PostList';
import WritePost from './WritePost';
import Post from './Post';
import EditPost from './EditPost';
import './App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'First Post', content: 'This is the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the second post.' }
  ]);

  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const updatePost = (id, updatedPost) => {
    setPosts(posts.map(post => (post.id === id ? updatedPost : post)));
  };

  const addPost = (newPost) => {
    const newId = posts.length ? posts[posts.length - 1].id + 1 : 1;
    setPosts([...posts, { id: newId, ...newPost }]);
  };

  return (
    <Router>
      <div className="App">
        <h1>Home Page</h1>
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/posts">Post List</Link> | 
          <Link to="/write">Write Post</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<PostList posts={posts} deletePost={deletePost} />} />
          <Route path="/posts/:postId" element={<Post posts={posts} />} />
          <Route path="/posts/edit/:id" element={<EditPost posts={posts} updatePost={updatePost} />} />
          <Route path="/write" element={<WritePost addPost={addPost} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
