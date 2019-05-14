import React, { Component, PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts'
import '../../style/PastYearSalesChart.css';


class PastYearSalesChart extends Component {



    generateData = () =>{
        let months = [
            { name: "Jan", sales: 0},
            { name: "Feb", sales: 0},
            { name: "Mar", sales: 0},
            { name: "Apr", sales: 0},
            { name: "May", sales: 0},
            { name: "June", sales: 0},
            { name: "July", sales: 0},
            { name: "Aug", sales: 0},
            { name: "Sep", sales: 0},
            { name: "Oct", sales: 0},
            { name: "Nov", sales: 0},
            { name: "Dec", sales: 0},
        ]
        this.props.clients.forEach(client => {
            let date = new Date(client.firstContact)
            if(date.getFullYear() === new Date().getFullYear()){
                months[date.getMonth()].sales++
            }
        })
        return months
    }


    render() {
        let months = this.generateData()

        return (
            <div id="pastYearSalesChart">
                <div className="title">Sales In {new Date().getFullYear()}</div>

                <LineChart
                    width={1100}
                    height={230}
                    data={months}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line strokeWidth={5} type="monotone" dataKey="sales" stroke="orange" activeDot={{ r: 8 }} />
                </LineChart>
            </div>
        );
    }
}

export default PastYearSalesChart;