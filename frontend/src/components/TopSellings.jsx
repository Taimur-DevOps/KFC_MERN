import React from "react";
import TopSelling from "./TopSelling";
import "./TopSellings.css";
import { useEffect, useState } from "react";
import axios from "axios";

const TopSellings = () => {
  const [myData, setmyData] = useState([]);

  useEffect(() => {
    const cat = {
      category: "alacarte",
    };

    axios.post("http://localhost:8080/api/products", cat).then((res) => {
      setmyData(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div>
      <div className="TopSellings">
        <h2>Top Selling </h2>
        <h1>
          {" "}
          <hr className="Tline" />
        </h1>
      </div>

      <div className="TopSellingGrid">
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
      </div>
    </div>
  );
};

export default TopSellings;
