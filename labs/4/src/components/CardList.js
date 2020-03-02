import 'data.json';
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
}