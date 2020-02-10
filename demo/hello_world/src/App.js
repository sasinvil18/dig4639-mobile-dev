import React from 'react';
import logo from './logo.svg';
import './App.css';

function NameBadge(props){
  return (
  <p>My name is {props.name}</p>
  )
}

class App extends React.Component{
  clickHandler = () => {
    alert("Clicked +");
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <div onClick ={this.clickHandler}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p>
          Woah this is so cool!!!
        </p>
        <NameBadge name = "Sarah"/>
        <NameBadge name = "Alise"/>
        
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
