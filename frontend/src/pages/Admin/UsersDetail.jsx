import React from "react";
import MainContainer from "../../components/Admin/MainContainer";
import SideNavbar from "../../components/Admin/SideNavbar";

import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./Products.css";

const UsersDetail = () => {

  const { user } = useSelector((state) => state.auth);
  console.log("users are ", user)

  const product = useSelector((state) => state.cart.cartData);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <SideNavbar />
      <MainContainer>
        <div>
          <h1 className="DashboardHeading ">Users</h1>
          <div className="orderStatusContainer">
            <h3 style={{ marginLeft: "25px", opacity: "0.6" }}>
              <i
                class="fa fa-search icon iconAdjustment"
                aria-hidden="true"
              ></i>
              <input
                type="text"
                id="myInput"
                placeholder="Search for names.."
                title="Type in a name"
              ></input>
            </h3>
          </div>

          {/* table for products */}
          <div className="tableData">
            <table id="products">
              <tr>
                <th>User ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>User Type</th>
                <th>Created At</th>
              </tr>




              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name[0]}</td>
                <td>{user.email}</td>
                <td>Admin</td>
                <td>{user.createdAt}</td>

              </tr>





            </table>
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default UsersDetail;
