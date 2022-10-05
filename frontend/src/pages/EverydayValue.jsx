import React from "react";
import NavCategories from "../components/NavCategories";
import TopSelling from "../components/TopSelling";
import "../components/TopSellings.css";
import { useEffect, useState } from "react";
import axios from "axios";

const EverydayValue = () => {
  const [myData, setmyData] = useState([]);

  useEffect(() => {
    const cat = {
      category: "everydayValue",
    };

    axios.post("http://localhost:8080/api/products", cat).then((res) => {
      setmyData(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <>
      {" "}
      <div>
        <NavCategories />
      </div>
      <div className="TopSellings" style={{ margin: "20px" }}>
        <h1>Everyday Value </h1>
        <h3>
          {" "}
          <hr className="" style={{ width: "1060px", marginLeft: "10px" }} />
        </h3>
      </div>
      <div className="TopSellingGrid ">
        {myData.map((post) => {
          const { _id, name, price, desc, imageUrl } = post;
          return (
            <div key={_id}>
              <TopSelling
                id={_id}
                Name={name}
                price={price}
                desc={desc}
                imageUrl={imageUrl}
              />
            </div>
          );
        })}

        {/* <TopSelling {...props[0]} />
        <TopSelling {...props[1]} />
        <TopSelling {...props[2]} />
        <TopSelling {...props[3]} />
        <TopSelling {...props[4]} />
        <TopSelling {...props[5]} />
        <TopSelling {...props[6]} />
        <TopSelling {...props[7]} /> */}
      </div>
    </>
  );
};

export default EverydayValue;
