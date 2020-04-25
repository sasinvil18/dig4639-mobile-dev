import React from "react";
import "./index.css";

class Card extends React.Component {

  render() {
    return(
      <div className="card">
        <h3>{this.props.name}</h3>
        <p>{this.props.number}</p>
      </div>
    );
  }


}

export default Card;