import React from "react";
import "./Admin.css";

import SideNavbar from "../../components/Admin/SideNavbar";
import MainContainer from "../../components/Admin/MainContainer";
import { useEffect } from "react";

const Admin = () => {
  useEffect(() => {
    const prevCOlor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "white"
    
    return () => {
      document.body.style.backgroundColor = prevCOlor
    }
  }, [])

  return (
    <>
      <div className="page" style={{backgroundColor:"White"}}>
        <SideNavbar />
        <MainContainer />
      </div>
    </>
  );
};

export default Admin;
