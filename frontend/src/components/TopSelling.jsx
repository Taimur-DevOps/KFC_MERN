import React from "react";
import "./TopSelling.css";
import { add } from "../store/cartSlice";
import { useDispatch } from "react-redux";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect } from "react";
import { useState } from "react";

const TopSelling = (props) => {
  const dispatch = useDispatch();

  const addToBucket = () => {
    console.log("helo");
    const data = {
      id: props.id,
      name: props.Name,
      quantity: 1,
      price: props.price,
      total: props.price,
      image: props.imageUrl,
    };
    console.log(data);

    dispatch(add(data));
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => myfunc(), 1500);
  }, []);

  const myfunc = () => {
    setLoading(false);
  };

  const grey="#1c1816";
  const black="#000"

  return (
    <div className="container_sellings">
      {loading ? (
        <Skeleton count={30}  baseColor={grey} highlightColor={black} height={12} />
      ) : (
        <>
          <img src={props.imageUrl} alt="img" className="sellingImg" />
          <h2 style={{marginTop:"28px"}}>{props.Name}</h2>
          <p className="desc">{props.desc}</p>

          <div className="PriceNbutton">
            <h2 className="sellingPrice">Rs {props.price}</h2>
            <button className="sellingButton" onClick={addToBucket}>
              Add to bucket
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TopSelling;
