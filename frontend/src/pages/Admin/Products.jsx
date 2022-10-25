import React, { useEffect, useState } from "react";
import MainContainer from "../../components/Admin/MainContainer";
import SideNavbar from "../../components/Admin/SideNavbar";
import Card from "../../components/Admin/Card";
import { FaTrash, FaEdit } from "react-icons/fa";
import "./Products.css";
import axios from "axios";
// import snacks from "../../assets/snacks.png"
// import Xtreme from "../../assets/Xtreme.png"
// import Rice from "../../assets/Rice.png"

const Products = () => {
  const [myData, setmyData] = useState([]);
  let [count, setCount] = useState(0);
  let [count2, setCount2] = useState(0);
  let [count3, setCount3] = useState(0);
  let [count4, setCount4] = useState(0);
  let [count5, setCount5] = useState(0);

  useEffect(() => {
    // const cat = {
    //   category: "alacarte",
    // };
    axios.post("http://localhost:8080/api/products").then((res) => {
      setmyData(res.data);

      // console.log(res.data);
    });
  }, []);

  // deleting a product from an api
  const deleteProduct = (id) => {
    console.log("Deleted", id);

    axios.delete(`http://localhost:8080/api/products/${id}`).then((res) => {
      setTimeout(() => {
        axios.post("http://localhost:8080/api/products").then((res) => {
          setmyData(res.data);
        });
      }, 100);
    });
  };

  // Updating a single product from an api
  const updateProduct = (id) => {
    console.log("updated", id);

    axios.put(`http://localhost:8080/api/products/update/${id}`).then((res) => {
      console.log(" kjlkjlkj", res);
    });
  };

  const FilterCategories = myData.map((item) => {
    if (item.category === "alacarte") {
      return (count = count + 1);
    }

    if (item.category === "everydayValue") {
      return (count2 = count2 + 1);
    }

    if (item.category === "midnightDeal") {
      return (count3 = count3 + 1);
    }

    if (item.category === "sharing") {
      return (count4 = count4 + 1);
    }

    if (item.category === "signature") {
      return (count5 = count5 + 1);
    }
  });
  console.log(FilterCategories);
  // setCount(data)

  const icons = [
    {
      completed: "fa fa-calendar-check-o icon ",
    },
    {
      canceled: "fa fa-calendar-times-o icon",
    },
    {
      pending: "fa fa-clock-o icon",
    },

    {
      active: "fa fa-calendar-minus-o icon",
    },
    {
      order: "fa fa-list-alt icon",
    },
  ];
  let i = 1;

  return (
    <>
      <SideNavbar />
      <MainContainer>
        <h1 className="DashboardHeading ">Products</h1>
        <div className="orderStatusContainer">
          <h3 style={{ marginLeft: "25px", opacity: "0.6" }}>Categories</h3>
          <div className="DashboardBody">
            <Card title="Alacarte" number={count} icon={icons[4].order} />
            <Card title="Sharing" number={count4} icon={icons[3].active} />
            <Card
              title="Everyday Value"
              number={count2}
              icon={icons[0].completed}
            />
            <Card
              title="Signature Deals"
              number={count5}
              icon={icons[2].pending}
            />
            <Card
              title="Midnight Deals"
              number={count3}
              icon={icons[1].canceled}
            />
          </div>
        </div>

        {/* table for products */}
        <div className="tableData">
          <h3 style={{ marginLeft: "20px", opacity: "0.6" }}>All Products</h3>
          <table id="products">
            <thead>
              <tr>
                <th>S/n</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>

            {myData.map((item) => {
              return (
                <tbody key={item._id}>
                  <tr>
                    <td>{i++}</td>
                    <td>
                      <img src={item.imageUrl} alt="" />{" "}
                    </td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.category}</td>
                    <td>{item.desc}</td>
                    <td className="deleteIconAdmin">
                      <FaEdit
                        className="deleteIconAdmin"
                        onClick={() => updateProduct(item._id)}
                      />
                      <FaTrash
                        className="deleteIconAdmin"
                        onClick={() => deleteProduct(item._id)}
                      />
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </MainContainer>
    </>
  );
};

export default Products;
