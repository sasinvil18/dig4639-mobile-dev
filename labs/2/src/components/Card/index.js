import "./index.css";

class Card{
    constructor (props){
        super(props);
        let element
        this.element = document.createElement('div');
        this.element.className = "card";
        this.element.innerHTML= this.element.content;
        document.body.element.appendChild(this.cont);
        document.body.appendChild(this.element);
    }

    render() {
        return this.element;
    }
    
}

export default Card;