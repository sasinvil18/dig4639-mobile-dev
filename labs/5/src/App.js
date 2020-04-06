import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Card from './components/Card/index.js';
import './components/Card/index.css';

class App extends Card {
  /*render(){
    return (
      <Card content="This is a card!"></Card>
    );
  }
}*/

  state = {

  };

  async componentDidMount() {
    const data = "https://api.weather.gov/gridpoints/MLB/25,69/forecast";
    const obtained = await fetch(data);
    const dataObtained = await obtained.json();
  }

  render(){
    return(
      <div>
        
      </div>
    );
  }
}


export default App;
