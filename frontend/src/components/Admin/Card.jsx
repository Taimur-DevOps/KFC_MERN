import React from "react";
import "./Card.css";

const Card = (props) => {

  return (
    <div>
      <a href="/" className="data-card">
        <div className="cardItemsPlacement">
          <i style={{color:"red"}} className={props.icon} aria-hidden="true"></i>
          <span>
            <h3>{props.number}</h3>
          </span>
        </div>
        <h4 className="status">{props.title}</h4>
      </a>
    </div>
  );
};

export default Card;
