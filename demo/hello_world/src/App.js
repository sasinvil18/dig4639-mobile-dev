import React from 'react';
import logo from './logo.svg';
import './App.css';

<<<<<<< HEAD
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
        
=======
function NameBadge(props) {
  console.log(props);
  return ( 
    <p>My name is {props.name}</p>
  )
}

class App extends React.Component {
  clickHandler(e) {
    alert("Clicked +");
    console.log(this);
    console.log(e);
  }
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <div  onClick={this.clickHandler}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p>
          Hello World 
        </p>
        <NameBadge name="John"/>
        <NameBadge name="Ana"/>
        <NameBadge name="June"/>
>>>>>>> 9abce194990a9fd96cdb92c3fb97fafabbd4ce40
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
<<<<<<< HEAD
  }
=======
}
>>>>>>> 9abce194990a9fd96cdb92c3fb97fafabbd4ce40
}

export default App;
