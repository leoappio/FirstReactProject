import './App.css';
import { Component } from 'react';
import { PostCard } from './components/PostCard';
import { loadPosts } from './utils/load-posts'


class App extends Component {
  state = {
    posts: []
  };
  // life cycle method
  async componentDidMount() {
    await this.loadPosts();

  }

  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();
    this.setState({ posts: postsAndPhotos })

  }

  render() {
    const { posts } = this.state;
    return (
      <section className="container">
        <div className="posts">
          {posts.map(post => (
            <PostCard
              key={post.id}
              post={post}
            />
          ))}
        </div>
      </section>
    );
  }
}

export default App;
