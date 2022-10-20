import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";

const WeeklyChart = () => {
  const { user } = useSelector((state) => state.auth);

  const [options, setOption] = useState({
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [],
      // categories: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    },
    fill: {
      colors: ["#e4002b"],
    },
    dataLabels: {
      enabled: false,
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
    let sum = 0;

    axios
      .get("http://localhost:8080/api/orders/orderHistory", {
        headers: { authorization: `Bearer ${user.token}` },
      })
      .then((response) => {
        
        response.data.map((item) => {
          item.cart.map((data) => {
            console.log("Total Amount >>", data.total);

            earnings.push(data.total);  
            sum=sum+data.total
            console.log(sum)

          });
          day.push(item.createdAt.slice(7, 10));
        });

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
