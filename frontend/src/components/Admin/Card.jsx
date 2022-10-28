import React from "react";
import "./Card.css";

const Card = (props) => {

  return (
    <div>
      <div  className="data-card">
        <div className="cardItemsPlacement">
          <i style={{color:"red"}} className={props.icon} aria-hidden="true"></i>
          <span>
            <h3>{props.number}</h3>
          </span>
        </div>
        <h4 className="status">{props.title}</h4>
      </div>
    </div>
  );
};

export default Card;
