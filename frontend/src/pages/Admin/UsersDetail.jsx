import React, { useEffect, useState } from "react";
import "./Products.css";
import MainContainer from "../../components/Admin/MainContainer";
import SideNavbar from "../../components/Admin/SideNavbar";
import { FaRegTrashAlt } from 'react-icons/fa';
import { useSelector } from "react-redux";
import axios from "axios";



const UsersDetail = () => {
  const { user } = useSelector((state) => state.auth);
  const [myData, setmyData] = useState([]);


  useEffect(() => {

    axios.get("http://localhost:8080/api/users/getAllUsers").then((res) => {
      setmyData(res.data);
      console.log(res.data);
    });
  }, []);


  console.log("the data is ", myData)
  console.log("isadmin", user.isAdmin);


  return (
    <>
      <SideNavbar />
      <MainContainer>
        <div>
          <h1 className="DashboardHeading ">Users</h1>
          <div className="orderStatusContainer">
            <h3 style={{ marginLeft: "25px", opacity: "0.6" }}>
              <i
                className="fa fa-search icon iconAdjustment"
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
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>User Type</th>
                  <th>Created At</th>
                  <th>Action</th>
                </tr>
              </thead>

              {myData.map((post) => {

                return (
                  <tbody key={post._id}>
                    <tr >
                      <td>{post._id}</td>
                      <td>{post.name[0]}</td>
                      <td>{post.email}</td>
                      <td>{post.isAdmin.toString()}</td>
                      <td>{post.createdAt}</td>
                      <td className="deleteIconAdmin">  <FaRegTrashAlt /> </td>
                    </tr>
                  </tbody>
                )
              })}

            </table>
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default UsersDetail;
