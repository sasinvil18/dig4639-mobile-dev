import "./index.css";

class Card {
    constructor (props){
        this.props = props;
        this.element = document.createElement('div');
        this.element.cont.innerHTML= this.element.content;
        document.body.element.appendChild(this.element.cont);
        document.body.appendChild(this.element);
        let span = document.createElement('span');
        this.element.appendChild(span);
        this.props.content = "Here is the the content"
        span.innerHTML = this.props.content;
        this.element.className = "card";
    }

    render() {
        return this.element;
    }
    
}

export default Card;