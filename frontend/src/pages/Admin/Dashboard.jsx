import React, { useState } from "react";
import MainContainer from "../../components/Admin/MainContainer";
import SideNavbar from "../../components/Admin/SideNavbar";
import Card from "../../components/Admin/Card";
import WeeklyChart from "../../components/Admin/WeeklyChart";
import MonthlyChart from "../../components/Admin/MonthlyChart";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);

  const [myData, setmyData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    console.log("isadmin", user.isAdmin);
    if (localStorage.getItem("user") === null || !user.isAdmin) {
      navigate("/");
    }

    const prevCOlor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "white";

    return () => {
      document.body.style.backgroundColor = prevCOlor;
    };
  });

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
        <h1 className="DashboardHeading ">Dashboard</h1>
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

        <div className="Charts">
          <div>
            <h2 style={{ marginLeft: "25px", opacity: "0.6" }}>
              Weekly Earnings
            </h2>
            <WeeklyChart />
          </div>
          <div>
            <h2 style={{ marginLeft: "25px", opacity: "0.6" }}>
              Monthly Earnings
            </h2>
            <MonthlyChart />
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default Dashboard;
