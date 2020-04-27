/*import 'data.json';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Close extends Card{
    constructor(props){
        super(props);
        //import cards with for loop
        //remove button for each element
        this.element = document.createElement('button');
        this.element.className = "close";
        //this.element.onclick =
        //<button className="button" 
        //onClick={(remove card) => {this.changeMenu(event, 1)} }>
        //</button>
        document.body.appendChild(this.element);
    }
}*/
import React from "react";
import "data.json";
import Card from "./index.js";

class CardList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {cards: []};

  }

  closeCard = () => {

    let cards = this.state.cards;
    cards.push(<Card />);

    console.log(this);

    this.setState({cards: cards});
    
    
  }

  showCards() {

    return(
      <ul>
      {this.state.cards.map((card, index) => {
        return (<li key={index}>{card}</li>);
      })}
      </ul>
    );

  }

  render() {

    return(
      <div>
        <button onClick={this.closeCard}>Delete Card</button>
        {this.showCards()}
      </div>
    );

  }

}

export default CardList;
