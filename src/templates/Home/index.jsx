import { Component } from 'react';
import './styles.css';
import { Posts } from '../../components/Posts';
import { loadPosts } from '../../utils/load-posts'
import { Button } from '../../components/Button';


class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2,
  };
  // life cycle method
  async componentDidMount() {
    await this.loadPosts();

  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    })

  }

  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

    posts.push(...nextPosts);
    this.setState({ posts, page: nextPage });
  }

  render() {
    const { posts } = this.state;
    return (
      <>
        <div className="title-page">
          <h1>Todos os posts</h1>
        </div>
        <section className="container">
          <Posts posts={posts} />
          <div className="button-container">
            <Button
              text="Load More Posts "
              whenClicked={this.loadMorePosts}
            />
          </div>
        </section>
      </>
    );
  }
}

export default Home;
