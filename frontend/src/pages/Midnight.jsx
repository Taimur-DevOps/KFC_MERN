import React from "react";
import NavCategories from "../components/NavCategories";
import TopSelling from "../components/TopSelling";
import "../components/TopSellings.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Midnight = () => {
  const [myData, setmyData] = useState([]);

  useEffect(() => {
    const cat = {
      category: "midnightDeal",
    };

    axios.post("http://localhost:8080/api/products", cat).then((res) => {
      setmyData(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <>
      <div>
        <NavCategories />
      </div>
      <div className="TopSellings" style={{ margin: "20px" }}>
        <h1>Midnight* STARTS 12:00 AM </h1>
        <h3>
          <hr className="" style={{ width: "900px", marginLeft: "10px" }} />
        </h3>
      </div>
      <div className="TopSellingGrid" style={{ justifyContent: "flex-start" }}>
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

export default Midnight;
