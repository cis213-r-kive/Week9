import './App.css';
import BlogPosts from './components/BlogPosts';
import NewPost from './components/NewPost';
import { useState, useEffect } from 'react';

function App() {
  const [loadedPosts, setLoadedPosts] = useState([]);

  useEffect(function () {
    async function loadPosts(){
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const blogPosts = await response.json();
      setLoadedPosts(blogPosts);
    }
    loadPosts();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        Initialized Lab
      </header>
      <NewPost />
      <BlogPosts posts={loadedPosts}/>
    </div>
  );
}

export default App;
