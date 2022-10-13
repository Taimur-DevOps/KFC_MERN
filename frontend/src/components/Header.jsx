import React from "react";
import "./Header.css";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../auth/authSlice";
import { useLocation } from "react-router-dom";

const Header = () => {


  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  const product = useSelector((state) => state.cart.cartData);

  const profilePage = () => {
    navigate("/profile");
  };


  //restircting Header for admin page
  const { pathname } = useLocation();
  if (pathname === "/admin") return null;
    if (pathname === "/admin/dashboard") return null;
    if (pathname === "/admin/users") return null;
    if (pathname === "/admin/orders") return null;
    if (pathname === "/admin/products") return null;
    if (pathname === "/admin/addProducts") return null;

  return (
    <div className="header">
      <div className="container_left">
        <Link to="/">
          {" "}
          <img src={logo} className="logo" alt="logo" />{" "}
        </Link>
        <button className="ButtonTagline">START AN ORDER FROM DELIVERY</button>
      </div>

      <div className="container_right">

          <span >
            {/* <i className="fa fa-map-marker mapIcon" aria-hidden="true"></i> */}
            <select name="dog-names" className="mapOptions" id="dog-names">
              <option value="rigatoni">Johar Town Lahore</option>
              <option value="dave">Iqbal Town Lahore</option>
              <option value="pumpernickel">Model Town Lahore</option>
              <option value="reeses">Iqbal Town Lahore</option>
            </select>
            {/* <i className="fa fa-angle-down angleIcon" aria-hidden="true"></i> */}
          </span>{" "}
   

        <Link to="/bucket">
          <button className="cart"> {product.length} </button>{" "}
        </Link>

        {/* <Link to="/login" style={{ textDecoration: "none" }}> */}

        <ul className="RegistrationButtons">
          {user ? (
            <li>
              <div className="userInfoStatus">
                <button className="SignOut " onClick={onLogout}>
                  <FaSignOutAlt /> SignOut
                </button>

                <span className="userInfoIcon" onClick={profilePage}>
                  {user.name[0][0]}{" "}
                </span>
              </div>
            </li>
          ) : (
            <div className="listButtons">
              <li>
                <Link to="/login" className="login">
                  <FaSignInAlt /> <span className="buttonIcon"> Login</span>
                </Link>
              </li>
              <li>
                <Link to="/register" className="login">
                  <FaUser /> <span className="buttonIcon"> Register </span>
                </Link>
              </li>
            </div>
          )}
        </ul>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Header;
