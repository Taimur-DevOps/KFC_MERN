import React from "react";
import TopSelling from "../components/TopSelling";
import "../components/TopSellings.css";
import { useEffect, useState } from "react";
import axios from "axios";

import NavCategories from "../components/NavCategories";

const SnacksBeverges = () => {
  const [myData, setmyData] = useState([]);

  useEffect(() => {
    const cat = {
      category: "snacksBeverges",
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
        <h1>Snacks & Beverages</h1>
        <h1>
          {" "}
          <hr className="" style={{ width: "1010px", marginLeft: "10px" }} />
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
    </>
  );
};

export default SnacksBeverges;
