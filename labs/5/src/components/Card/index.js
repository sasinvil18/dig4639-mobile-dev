import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Card extends React.Component{
    constructor(props){
        super(props);
        this.state;
    }
    render(){
        return(
            <Card content="" />
        )
    }
}

export default Card;

ReactDOM.render(<Card />, document.getElementById('root'));