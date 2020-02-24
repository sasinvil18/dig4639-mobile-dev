import React from 'react';
//import ReactDOM from 'react-dom';
import './index.css';

class Card extends React.Component{
    constructor(props){
        super(props);
        this.element = document.createElement('div');
        this.element.innerHTML=this.element.content;
        let span = document.createElement('span');
        this.element.appendChild(span);
        span.innerHTML = this.props.content;
        this.element.className = 'card';

    }
    render(){
        return;
    }
}

export default Card;