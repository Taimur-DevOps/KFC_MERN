import React, { useEffect, useState } from "react";
import MainContainer from "../../components/Admin/MainContainer";
import SideNavbar from "../../components/Admin/SideNavbar";
import Card from "../../components/Admin/Card";
import "./Products.css";
import axios from "axios";
import { useSelector } from "react-redux";

const Orders = () => {
  let i = 1; //i for Sr# for table orders

  const [myData, setmyData] = useState([]);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/orders/getAllOrders", {
        headers: { authorization: `Bearer ${user.token}` },
      })
      .then((res) => {
        setmyData(res.data);
        console.log("the data is", res.data);
      });
  }, [user]);

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

  return (
    <>
      <SideNavbar />
      <MainContainer>
        <div>
          <h1 className="DashboardHeading ">Orders</h1>
          <div className="orderStatusContainer">
            <h3 style={{ marginLeft: "25px", opacity: "0.6" }}>Categories</h3>
            <div className="DashboardBody">
              <Card
                title="All Orders"
                number={myData.length}
                icon={icons[4].order}
              />
              <Card title="Active Orders"    number={myData.length} icon={icons[3].active} />
              <Card title="Completed" number="0" icon={icons[0].completed} />
              <Card title="Pending"   number={myData.length} icon={icons[2].pending} />
              <Card title="Canceled" number="0" icon={icons[1].canceled} />
            </div>
          </div>
          {/* table for products */}
          <div className="tableData">
            <table id="products">
              <tr>
                <th>Sr#</th>
                {/* <th>Id</th> */}
                <th>Name</th>
                <th>Email</th>
                <th>Date</th>
                <th>Order </th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Status</th>
              </tr>

              {myData.map((item) => {
                return (
                  <tbody key={item._id}>
                    {item.cart.map((subItem, index) => {
                      return (
                        <tr key={index}>
                          <td>{i++}</td>
                          {/* <td>{item._id}</td> */}
                          <td>{item.user?.name}</td>
                          <td>{item.user?.email}</td>
                          <td>{item.createdAt}</td>
                          <td>{subItem.name}</td>
                          <td>Rs:{subItem.price} </td>
                          <td>* {subItem.quantity}</td>
                          <td>Rs:{subItem.total}</td>
                          <td>
                            <select id="action">
                              <option value="Pending" className="pending">
                                Pending
                              </option>
                              <option value="Completed">Completed</option>
                              <option value="Cancelled">Cancelled</option>
                            </select>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default Orders;
