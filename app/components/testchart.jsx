import React, {Component} from 'react';

var Chart = require('react-d3-core').Chart;
var LineChart = require('react-d3-basic').LineChart;

export default class Test extends Component {


    generateData(interest,balance,duration) {

        let data = [];

        //interest

        //balance

        //duration per year


        for (var i = 1; i <= duration; i++) {

            let year ={};

            //todo use proper formula
            year.balance =balance - i * (balance/duration)  ;
            year.yr=duration -(i+1);

            data.push(year);

        }


        return data;
    }

    render() {


        let chartData = [
            {
                name: "Lavon Hilll I",
                BMI: 120.57,
                age: 12,
                birthday: "1994-10-26T00:00:00.000Z",
                city: "Annatown",
                married: true,
                index: 1
            },
            {
                name: "Clovis Pagac",
                BMI: 24.28,
                age: 26,
                birthday: "1995-11-10T00:00:00.000Z",
                city: "South Eldredtown",
                married: false,
                index: 3
            },
            {
                name: "Gaylord Paucek",
                BMI: 24.41,
                age: 30,
                birthday: "1975-06-12T00:00:00.000Z",
                city: "Koeppchester",
                married: true,
                index: 5
            },
            {
                name: "Ashlynn Kuhn MD",
                BMI: 23.77,
                age: 32,
                birthday: "1985-08-09T00:00:00.000Z",
                city: "West Josiemouth",
                married: false,
                index: 6
            }
        ]


        var width = 700,
            height = 300,
            margins = {left: 100, right: 100, top: 50, bottom: 50},
            title = "User sample",
            // chart series,
            // field: is what field your data want to be selected
            // name: the name of the field that display in legend
            // color: what color is the line
            chartSeries = [
                {
                    field: 'balance',
                    name: 'BMI',
                    color: '#ff7f0e'
                }
            ],
            // your x accessor
            x = function (d) {
                return d.yr;
            }

        return (<div>
                hello

                <LineChart
                    margins={margins}
                    title={title}
                    data={this.generateData(0,200000,10)}
                    width={width}
                    height={height}
                    chartSeries={chartSeries}
                    x={x}
                />

            </div>
        );
    }

}
