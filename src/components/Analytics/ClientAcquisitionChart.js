import React, { Component } from 'react';
import { PieChart, Pie, Legend, Tooltip, Cell} from 'recharts';
import '../../style/ClientAcquisitionChart.css';
const moment = require('moment')



class ClientAcquisitionChart extends Component {

    generateDate = () => {
        let data = [
            { name: 'This Month', sales: 0 },
            { name: '2-6 Months', sales: 4 },
            { name: '7-12 Months', sales: 2 },
            { name: '>12 Months', sales: 3 },
        ]

        let now = new Date()
        this.props.clients.forEach(client => {
            let date = new Date(client.firstContact)
            if (date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear()) {
                data[0].sales++
                console.log(date)
            }
            // else if(){

            // }
            // if(now > date.setDate(date.getDate() + 365)){
            //     console.log(now)
            //     console.log(date)
            //     console.log(new Date(date.setDate(date.getDate() + 365)))

            // }


        })

        return data
    }

    render() {
        let sales = this.generateDate()
        const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

        console.log(sales)

        return (
            <div id="clientAcquisitionChart">
                <div className="title">Client Acquisition</div>
                <PieChart width={400} height={400}>
                    <Pie dataKey="sales" isAnimationActive={true} data={sales} cx={150} cy={100} outerRadius={80} fill="red" label="name">
                        {
                            sales.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)
                        }
                    </Pie>
                    <Tooltip />
                </PieChart>
            </div>
        );
    }
}

export default ClientAcquisitionChart;