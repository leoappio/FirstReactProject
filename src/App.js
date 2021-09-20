import './App.css';
import { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          id: 1,
          title: 'Titulo Objeto 1',
          body: 'Corpo Objeto 1'
        },
        {
          id: 2,
          title: 'Titulo Objeto 2',
          body: 'Corpo Objeto 2'
        },
        {
          id: 3,
          title: 'Titulo Objeto 3',
          body: 'Corpo Objeto 3'
        }
      ]
    }
  }

  clickName = (event) => {
    event.preventDefault();
    const { counter } = this.state;
    this.setState({ counter: counter + 1 })
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="App">
        {posts.map(post => (
          <div key={post.id}>
            <h1> {post.title} </h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
