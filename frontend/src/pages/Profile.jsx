import React, { useEffect, useState } from "react";
import "./Profile.css";
// import { Link, useNavigate } from "react-router-dom";
// import midnight from "../assets/midnight.png"
import { useSelector } from "react-redux";
import axios from "axios";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  // const product = useSelector((state) => state.cart.cartData);
  console.log("the user is ", user);

  const [myData, setmyData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/orders/", {
        headers: { authorization: `Bearer ${user.token}` },
      })
      .then((res) => {
        setmyData(res.data);
        console.log("the data are", res.data);
      });
  });
  return (
    <div className="divRows">
      <div className="UserInfo">
        <h1 className="welcomeUser">Hello {user.name}!</h1>
        <div className="InfoContainer">
          <h2>Personal Info </h2>
          <h4>
            Name : <span>{user.name}</span>
          </h4>
          <h4>
            Email: <span>{user.email}</span>
          </h4>
          <h4>
            Date of Birth : <span>N/A</span>
          </h4>
        </div>
      </div>

      <div className="UserInfo">
        <h1 className="welcomeUser"> </h1>
        <div className="InfoContainer">
          <h2>Past Orders </h2>
          <div className="RecordTable">
            {myData.map((item) => {
              console.log("jashkjahs", myData);

              return (
                <div key={item._id}>
                  {item.cart.map((subItem) => {
                    return (
                      <ul className="cards" key={subItem.id}>
                        <li>
                          <a href={subItem.image} className="card">
                            <img
                              src={subItem.image}
                              className="card__image"
                              alt=""
                            />

                            <div className="card__overlay">
                              <div className="card__header">
                                <div className="card__header-text">
                                  <h3 className="card__title">
                                    Total Price: {subItem.total}
                                  </h3>
                                  <span className="card__status">
                                    Date: {item.createdAt}
                                  </span>
                                </div>
                              </div>

                              <div className="card__description">
                                <h3>{subItem.name} </h3>
                                <h4>
                                  Rs{subItem.price} * {subItem.quantity} =
                                  {subItem.total}Rs
                                </h4>
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
