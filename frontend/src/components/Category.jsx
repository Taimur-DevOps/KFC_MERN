import React from "react";
import "./Category.css";

const Category = (props) => {
  return (
    <div className="Category">
      <img className="category_img" src={props.imageUrl} alt="img" />
      <p>{props.imageText}</p>
    </div>
  );
};

export default Category;
