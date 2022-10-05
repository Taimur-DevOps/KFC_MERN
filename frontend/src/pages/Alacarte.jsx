import React from "react";
import TopSelling from "../components/TopSelling";
import axios from "axios";
import "../components/TopSellings.css";
import NavCategories from "../components/NavCategories";
import { useEffect, useState } from "react";





const Alacarte = () => {
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
    <>
      <div>
        <NavCategories />
      </div>
      <div className="TopSellings " style={{ margin: "20px" }}>
        <h1>Ala Carte & Combos</h1>
        <h1>
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

export default Alacarte;

// let props = [
//   {
//     id: "a1",
//     imageUrl: zingerStackerCombo,
//     Name: "Zinger Stacker Combo",
//     desc: "Stacker + 1 Regular fries+ 1 Regular drink",
//     price: 740,
//   },
//   {
//     id: "a2",
//     imageUrl: ZingerStacker,
//     Name: "Zinger Stacker",
//     desc: "Double chicken fillet, jalapenos, spicy mayo, lettuce and cheese with our signature Vietnamese Sauce",
//     price: 530,
//   },
//   {
//     id: "a3",
//     imageUrl: ZingerCombo,
//     Name: "Zinger Combo ",
//     desc: "A portrait of our hero- crispy Zinger fillet, signature mayo and lettuce- sandwiched between a sesame seed bun",
//     price: 710,
//   },
//   {
//     id: "a4",
//     imageUrl: ZingerBurger,
//     Name: "Zinger Burger",
//     desc: "A portrait of our hero- crispy Zinger fillet, signature mayo and lettuce- sandwiched between a sesame seed bun",
//     price: 500,
//   },
//   {
//     id: "a5",
//     imageUrl: twisterCombo,
//     Name: "Twister Combo",
//     desc: "Twister + 1 Regular fries+ 1 Regular drink",
//     price: 710,
//   },
//   {
//     id: "a6",
//     imageUrl: Twister,
//     Name: "Twister",
//     desc: "Tender chicken strips, black pepper mayo, diced tomatoes and lettuce- wrapped in a tortilla",
//     price: 500,
//   },
//   {
//     id: "a7",
//     imageUrl: MightyZinger,
//     Name: "Mighty Zinger Combo ",
//     desc: "Mighty Zinger + regular drink",
//     price: 710,
//   },
//   {
//     id: "a8",
//     imageUrl: mighty,
//     Name: "Mighty Zinger ",
//     desc: "Our signature Zinger but Bigger! Double Zinger fillet with a combination of spicy and plain mayo, lettuce and cheese- sandwiched between a sesame seed bun",
//     price: 500,
//   },
//   {
//     id: "a9",
//     imageUrl: kentucky,
//     Name: "Kentucky Burger Combo ",
//     desc: "Kentucky burger + 1 regular fries+ 1 regular drink",
//     price: 710,
//   },
//   {
//     id: "a10",
//     imageUrl: kentuckyBurger,
//     Name: "Kentucky Burger",
//     desc: "OG Zinger fillet layered with beef pepperoni, crispy fried onions, cheese and smokey BBQ sauce- sandwiched between an herb and black sesame bun",
//     price: 500,
//   },
// ];
