import React from "react";
import "./Header.css";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../authFeatures/authSlice";


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


const profilePage=()=>{
  navigate("/profile")
}



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
        <button className="map">
          {" "}
          <span>
            <i className="fa fa-map-marker mapIcon" aria-hidden="true"></i>
          </span>{" "}
          Block G Phase 1 Johar Town{" "}
          <span>
            <i className="fa fa-angle-down angleIcon" aria-hidden="true"></i>
          </span>{" "}
        </button>

        <Link to="/bucket">
          <button className="cart">  {product.length} </button>{" "}
        </Link>

        {/* <Link to="/login" style={{ textDecoration: "none" }}> */}

        <ul className="RegistrationButtons">
          {user ? (
            <li>
              <div className="userInfoStatus">
              <button className="SignOut " onClick={onLogout}>
                <FaSignOutAlt /> SignOut
              </button>

              <span className="userInfoIcon" onClick={profilePage}>{user.name[0][0]} </span>
              </div>
            </li>
          ) : (
            <div className="listButtons">
              <li>
                <Link to="/login" className="login">
                <FaSignInAlt /> <span className="buttonIcon" > Login</span>
                </Link>
              </li>
              <li>
                <Link to="/register" className="login">
                  <FaUser />  <span className="buttonIcon"> Register </span>
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
