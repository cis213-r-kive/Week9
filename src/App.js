import './App.css';
import BlogPosts from './components/BlogPosts';
import NewPost from './components/NewPost';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Initialized Lab
      </header>
      <NewPost />
      <BlogPosts />
    </div>
  );
}

export default App;
