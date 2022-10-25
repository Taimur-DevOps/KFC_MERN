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
      // categories: [],
      categories: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
    },
    fill: {
      colors: ["#e4002b"],
    },
    dataLabels: {
      enabled: true,
    },
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
        response.data.forEach((item) => {
          let total = 0;

          item.cart.forEach((_item) => {
            total += _item.total;
          });

          day.unshift(moment(item.createdAt).format("dd"));

          earnings.unshift(total);

          // newData.unshift({
          //   date: moment(item.createdAt).format("dddd"),
          //   total: total,
          // });
        });
        console.log("CPI", day, earnings);

        setOption({
          chart: {
            id: "apexchart-example",
          },
          xaxis: {
            categories: day,
          },
        });

        setSeries([
          {
            name: "series-1",
            data: earnings,
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
