
import React, { Component } from "react";
import Chart from "react-apexcharts";

class WeeklyChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
        },
        fill:{
        colors:['#e4002b']
        }
        
      },
      series: [
        {
          name: "series-1",
          data: [3000, 4000, 4500, 5000, 4900, 6000, 7000]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="600"
              height="300"
              
            />
          </div>
        </div>
      </div>
    );
  }
}

export default WeeklyChart