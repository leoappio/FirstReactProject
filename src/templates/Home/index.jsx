import { Component } from 'react';
import './styles.css';
import { Posts } from '../../components/Posts';
import { loadPosts } from '../../utils/load-posts'
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';


class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 12,
    searchValue: '',
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

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
  }

  render() {
    const { posts, searchValue, allPosts } = this.state;

    const filteredPosts = !!searchValue ?
      allPosts.filter(post => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase())
      })
      :
      posts;
    return (
      <>
        <div className="title-page">
          <h1>All Posts</h1>
        </div>
        <section className="container">
          <div className="search-container">
            <TextInput
              searchValue={searchValue}
              handleChange={this.handleChange}
            />
          </div>
          {filteredPosts.length === 0 && (
            <h1>
              Dont exist post with this word
            </h1>
          )}
          <Posts posts={filteredPosts} />
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
