// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Chart from "react-apexcharts";

// const Charts = () => {
//   const [options, setOption] = useState({
//     chart: {
//       id: "basic-bar",
//     },
//     xaxis: {
//       categories: [],
//     },
//     fill: {
//       colors: ["#e4002b"],
//     },
//   });

//   const [series, setSeries] = useState([
//     {
//       name: "series-1",
//       data: [],
//     },
//   ]);

//   useEffect(() => {
//     const age = [];
//     const salary = [];

//     axios
//       .get("https://dummy.restapiexample.com/api/v1/employees")
//       .then((response) => {
//         console.log("response", response);
//         response.data.data.map((item) => {
//           console.log("item", item);
//           age.push(item.employee_age);
//           salary.push(item.employee_salary);
//         });

//         setOption({
//           chart: {
//             id: "apexchart-example",
//           },
//           xaxis: {
//             categories: salary,
//           },
//         });

//         setSeries([
//           {
//             name: "series-1",
//             data: age,
//           },
//         ]);
//         console.log("Age n Salary ", age, salary);
//       })
//       .catch((e) => {
//         alert(e);
//       });
//   }, []);

//   return (
//     <div>
//       <Chart
//         options={options}
//         series={series}
//         type="bar"
//         width="600"
//         height="300"
//       />
//     </div>
//   );
// };

// export default Charts;


































// // class Compoenent 






// import React, { Component } from "react";
// import Chart from "react-apexcharts";

// class WeeklyChart extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       options: {
//         chart: {
//           id: "basic-bar"
//         },
//         xaxis: {
//           categories: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
//         },
//         fill:{
//         colors:['#e4002b']
//         }
        
//       },
//       series: [
//         {
//           name: "series-1",
//           data: [3000, 4000, 4500, 5000, 4900, 6000, 7000]
//         }
//       ]
//     };
//   }

//   render() {
//     return (
//       <div className="app">
//         <div className="row">
//           <div className="mixed-chart">
//             <Chart
//               options={this.state.options}
//               series={this.state.series}
//               type="bar"
//               width="600"
//               height="300"
              
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default WeeklyChart








