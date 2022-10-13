
import React, { Component } from "react";
import Chart from "react-apexcharts";

class MonthlyChart extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'Week 1',
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
            }, {
                name: 'Week 2',
                data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
              
            }, {
                name: 'Week 3',
                data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
            },
            {
                name: 'Week 4',
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
          
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 350,
                    width: 600
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '65%',
                        endingShape: 'rounded'
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                xaxis: {

                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                },
                yaxis: {
                    title: {
                        text: 'Rs (thousands)',

                    }
                },
                fill: {
                    opacity: 1,
                    

                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return " " + val + " thousands"
                        }
                    }
                }
            },


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

export default MonthlyChart