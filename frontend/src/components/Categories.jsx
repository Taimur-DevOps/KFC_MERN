import React from "react";
import Category from "./Category";
import "./Categories.css";
import midnight from "../assets/midnight.png";
import snacks from "../assets/snacks.png";
import sharing from "../assets/sharing.png";
import signaturebox from "../assets/signaturebox.png";
import alacarte from "../assets/alacarte.png";
import everydayValue from "../assets/everydayValue.png";


import { Link } from "react-router-dom";

const Categories = () => {
  let props = [
    { imageUrl: everydayValue, imageText: "Everyday Value" },
    { imageUrl: alacarte, imageText: "Ala Carte & Combos" },
    { imageUrl: signaturebox, imageText: "Signature Boxes" },
    { imageUrl: sharing, imageText: "Sharing" },
    { imageUrl: snacks, imageText: "Snacks & Beverages" },
    { imageUrl: midnight, imageText: "Midnight" },
  ];
  return (
    <>
      <div className="browseCategories">
        <h2>Browse Categories </h2>
        <h1>
          {" "}
          <hr className="line" />
        </h1>
      </div>

      <div className="Categories ">
      <Link  to="/Categories/everydayValue" className="link"> <Category {...props[0]} /> </Link>
      <Link to="/Categories/Alacarte" className="link"> <Category {...props[1]} /> </Link>
      <Link to="/Categories/Signature" className="link"> <Category {...props[2]} /> </Link>
      <Link to="/Categories/Sharing" className="link"> <Category {...props[3]} /> </Link>
      <Link to="/Categories/SnacksBeverages" className="link"> <Category {...props[4]} /> </Link>
      <Link to="/Categories/Midnight" className="link"> <Category {...props[5]} /> </Link>
      </div>
    </>
  );
};

export default Categories;
