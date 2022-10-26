import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import moment from "moment";

const WeeklyChart = () => {
  const { user } = useSelector((state) => state.auth);

  const [options, setOption] = useState({
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [],
      // categories: [
      //   "Monday",
      //   "Tuesday",
      //   "Wednesday",
      //   "Thursday",
      //   "Friday",
      //   "Saturday",
      //   "Sunday",
      // ],
    },
    fill: {
      colors: ["#e4002b"],
    },
    dataLabels: {
      position: 'top',
      maxItems: 7,

     
  }
  });

  const [series, setSeries] = useState([
    {
      name: "series-1",
      data: [],
    },
  ]);

  useEffect(() => {
    const day = [];

    const earnings = [];

    // const newData = [];

    axios
      .get("http://localhost:8080/api/orders/orderHistory", {
        headers: { authorization: `Bearer ${user.token}` },
      })
      .then((response) => {
        
        // console.log("CPI", day, earnings);
        console.log(response?.data)

        setOption({
          chart: {
            id: "apexchart-example",
          },
          xaxis: {
            categories: response?.data?.dates,
          },
        });

        setSeries([
          {
            name: "series-1",
            data: response?.data?.totals,
          },
        ]);
        // console.log("Age n Salary ", day, earnings);
      })
      .catch((e) => {
        alert(e);
      });
  }, [user]);

  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="bar"
        width="600"
        height="300"
      />
    </div>
  );
};

export default WeeklyChart;
