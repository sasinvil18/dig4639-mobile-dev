import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Card extends React.Component{
    constructor(props){
        super(props);
        this.element = document.createElement('div');
        this.element.className = "card";
        this.cont.innerHTML= this.element.content;
        document.body.element.appendChild(this.cont);
        document.body.appendChild(this.element);
    }
}

export default Card;

ReactDOM.render(<Card />, document.getElementById('root'));