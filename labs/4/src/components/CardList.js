import 'data.json';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Close extends Card{
    constructor(props){
        super(props);
        this.element = document.createElement('button');
        this.element.className = "close";
        this.element.onclick =
        document.body.appendChild(this.element);
    }
}