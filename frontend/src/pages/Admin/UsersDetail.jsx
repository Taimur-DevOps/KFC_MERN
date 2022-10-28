import React, { useEffect, useState } from "react";
import "./Products.css";
import MainContainer from "../../components/Admin/MainContainer";
import SideNavbar from "../../components/Admin/SideNavbar";
import { FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";
import axios from "axios";
import moment from "moment";

const UsersDetail = () => {
  const { user } = useSelector((state) => state.auth);
  const [myData, setmyData] = useState([]);
  console.log("mydata", myData);

  // Search Filter
  const [search, setSearch] = useState("");
  console.log(search);

  useEffect(() => {
    axios.get("http://localhost:8080/api/users/getAllUsers").then((res) => {
      setmyData(res.data);
    });
  }, []);

  // console.log("the data is ", myData)
  // console.log("isadmin", user.isAdmin);

  const deleteUser = (id) => {
    console.log("Deleted ", id);

    axios.delete(`http://localhost:8080/api/users/${id}`).then((res) => {
      setTimeout(() => {
        axios.get("http://localhost:8080/api/users/getAllUsers").then((res) => {
          setmyData(res.data);
        });
      }, 10);
    });
  };

  let i = 1;

  return (
    <>
      <SideNavbar />
      <MainContainer>
        <div>
          <h1 className="DashboardHeading ">Users</h1>
          {/* <div className="orderStatusContainer">
            <h3 style={{ marginLeft: "25px", opacity: "0.6" }}>
            </h3>
          </div> */}

          {/* table for products */}
          <div className="tableData">
              <form action="">
                <i
                  className="fa fa-search icon iconAdjustment"
                  aria-hidden="true"
                ></i>
                <input
                  type="text"
                  id="myInput"
                  placeholder="Search for User.."
                  title="Type in a name"
                  onChange={(e) => setSearch(e.target.value)}
                ></input>
              </form>
            <table id="products">
              <thead>
                <tr>
                  <th>S/n</th>
                  <th>User ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>User Type</th>
                  <th>Created At</th>
                  <th>Action</th>
                </tr>
              </thead>

              {myData
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.name[0].toLowerCase().includes(search);
                })
                .map((post) => {
                  return (
                    <tbody key={post._id}>
                      <tr>
                        <td>{i++}</td>
                        <td>{post._id}</td>
                        <td>{post.name[0]}</td>
                        <td>{post.email}</td>
                        <td>{post.isAdmin.toString()}</td>
                        <td>{moment(post.createdAt).format("DD-MM-YYYY")}</td>
                        <td className="deleteIconAdmin">
                          <FaTrash onClick={() => deleteUser(post._id)} />
                        </td>
                      </tr>
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

export default UsersDetail;
