/*import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Card from './components/Card/index.js';
import './components/Card/index.css';

class App extends Card {
  render(){
    return (
      <Card content="This is a card!"></Card>
    );
  }
}

export default App;*/
import React from 'react';
import './App.css';
import CardList from "./Components/CardList.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
       <CardList />
      </div>
    );
  }
}

export default App;
