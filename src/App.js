import './App.css';
import { Component } from 'react';
import { Posts } from './components/Posts';
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
      <>
        <div className = "title-page">
          <h1>Todos os posts</h1>
        </div>
        <section className="container">
          <Posts posts={posts} />
        </section>
      </>
    );
  }
}

export default App;
