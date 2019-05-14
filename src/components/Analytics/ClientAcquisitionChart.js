import React, { Component } from 'react';
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';
import '../../style/ClientAcquisitionChart.css';
const moment = require('moment')



class ClientAcquisitionChart extends Component {

    generateDate = () => {
        let data = [
            { name: 'This Month', sales: 0 },
            { name: '2-6 Months', sales: 100 },
            { name: '7-12 Months', sales: 0 },
            { name: '>12 Months', sales: 0 },
        ]

        this.props.clients.forEach(client => {
            let date = new Date(client.firstContact)
            if (date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear()) {
                data[0].sales++
            } else if (new Date() > new Date(date.setDate(date.getDate() + 365))) {
                data[3].sales++
            } else if ((new Date() > new Date(date.setDate(date.getDate() + 31))) &&
            (new Date() > new Date(date.setDate(date.getDate() + 183)))) {
                data[1].sales++
            }else{
                data[2].sales++
            }
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
                <PieChart width={450} height={250}>
                    <Pie dataKey="sales" isAnimationActive={true} data={sales} cx={200} cy={120} outerRadius={80} fill="red" label="name" label={({
                        cx,
                        cy,
                        midAngle,
                        innerRadius,
                        outerRadius,
                        value,
                        index
                    }) => {
                        console.log("handling label?");
                        const RADIAN = Math.PI / 180;
                        // eslint-disable-next-line
                        const radius = 25 + innerRadius + (outerRadius - innerRadius);
                        // eslint-disable-next-line
                        const x = cx + radius * Math.cos(-midAngle * RADIAN);
                        // eslint-disable-next-line
                        const y = cy + radius * Math.sin(-midAngle * RADIAN);

                        return (
                            <text
                                x={x}
                                y={y}
                                fill="black"
                                textAnchor={x > cx ? "start" : "end"}
                                dominantBaseline="central"
                            >
                                {sales[index].name} ({value})
            </text>
                        );
                    }}>
                        {
                            sales.map((entry, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)
                        }


                    </Pie>

                    <Tooltip />
                </PieChart>
            </div>
        );
    }
}

export default ClientAcquisitionChart;