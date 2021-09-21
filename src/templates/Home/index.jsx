import { Component, useEffect, useState, useCallback } from 'react';
import './styles.css';
import { Posts } from '../../components/Posts';
import { loadPosts } from '../../utils/load-posts'
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';


export const Home = () => {

  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(10);
  const [searchValue, setSearchValue] = useState('');


  const filteredPosts = !!searchValue ?
    allPosts.filter(post => {
      return post.title.toLowerCase().includes(searchValue.toLowerCase())
    })
    :
    posts;

    const handleLoadPosts = useCallback(async (page, postsPerPage) => {
      const postsAndPhotos = await loadPosts();
      setPosts(postsAndPhotos.slice(page, postsPerPage));
      setAllPosts(postsAndPhotos);
    },[])

    useEffect(()=>{
      handleLoadPosts(0, postsPerPage);
    }, [handleLoadPosts, postsPerPage]);

    const loadMorePosts = () => {

      const nextPage = page + postsPerPage;
      const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
      posts.push(...nextPosts);

      setPosts(posts);
      setPage(nextPage);
    }

    const handleChange = (e) => {
      const { value } = e.target;
      setSearchValue(value);
    }

  return (
    <>
      <div className="title-page">
        <h1>All Posts</h1>
      </div>
      <section className="container">
        <div className="search-container">
          <TextInput
            searchValue={searchValue}
            handleChange={handleChange}
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
            whenClicked={loadMorePosts}
          />
        </div>
      </section>
    </>
  );
}
export default Home;
