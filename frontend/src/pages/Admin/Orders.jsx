import React, { useEffect, useState } from "react";
import MainContainer from "../../components/Admin/MainContainer";
import SideNavbar from "../../components/Admin/SideNavbar";
import Card from "../../components/Admin/Card";
import "./Products.css";
import axios from "axios";
import { useSelector } from "react-redux";
// import moment from "moment";
import Posts from "../../components/Admin/Posts";
import PaginationBar from "../../components/Admin/PaginationBar";


const Orders = () => {
  let count = 1; //i for Sr# for table orders
  const { user } = useSelector((state) => state.auth);

  const [myData, setmyData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8080/api/orders/getAllOrders", {
        headers: { authorization: `Bearer ${user.token}` },
      })
      .then((res) => {
        setmyData(res.data);
        setLoading(false);
        console.log("the Order data is", res.data);
      });
  }, [user]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = myData.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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

  let totals = [];
  // const deliverStatus = (id) => {
  //   console.log("deliver", id)
  //   setDeliver(pre => !pre)

  // }
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
              <Card
                title="Active Orders"
                number={myData.length}
                icon={icons[3].active}
              />
              <Card title="Completed" number="0" icon={icons[0].completed} />
              <Card
                title="Pending"
                number={myData.length}
                icon={icons[2].pending}
              />
              <Card title="Canceled" number="0" icon={icons[1].canceled} />
            </div>
          </div>
          {/* table for products */}
          <div className="tableData">
            <table id="products">
              <tr>
                <th>S/n</th>
                <th>Username</th>
                <th>Email</th>
                <th> Order Date</th>
                <th style={{ textAlign: "center" }}>Orders</th>
                <th>Total</th>
                <th>Status</th>
              </tr>

              <Posts myData={currentPosts} loading={loading} count={count} />
            </table>
              <PaginationBar
                postsPerPage={postsPerPage}
                totalPosts={myData.length}
                paginate={paginate}
              />
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default Orders;

<>
  {/* {myData.map((item,index) => {

                return (
                  <tbody key={item._id}>
                    {item.cart.map((subItem, index) => {
                      return (
                        <tr key={index}>
                          <td>{i++}</td>
                          <td>{item.user?.name}</td>
                          <td>{item.user?.email}</td>
                          <td>{item.createdAt.slice(0, 10)}</td>
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
              })} */}
</>;
