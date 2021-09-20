import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      counter : 0
    }
  }

  clickName = (event) => {
    event.preventDefault();
    const { counter } = this.state;
    this.setState({counter: counter + 1})
  }

  render(){
    const {counter} = this.state;
    return (
      <div className="App" onClick = {this.clickName}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick = {this.clickName}>
            Cliques {counter}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
