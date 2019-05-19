import React, { Component, PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import '../../style/SalesByCountryChart.css';


class SalesByCountryChart extends Component {
    constructor() {
        super()
        this.state = {
            select: "country"
        }
    }

    changeValue = event => this.setState({ [event.target.name]: event.target.value })

    getFullMonth = (date = new Date()) => new Intl.DateTimeFormat('en-US', { month: "long" }).format(date).slice(0, 3)

    getDataSet = (key) => {
        let AllData = new Set()
        key === "month" ?
            this.props.clients.forEach(client => AllData.add(this.getFullMonth(new Date(client.firstContact)))) :
            this.props.clients.forEach(client => client[key] ? AllData.add(client[key]) : null)
        return Array.from(AllData)
    }

    generateData = (key) => {
        let AllData = this.getDataSet(key)
        let dataArray = []
        AllData.forEach(data => dataArray.push({ name: data, sales: 0 }))
        for (let c of this.props.clients) {
            for (let i in dataArray) {
                if (dataArray[i].name === c[key]) {
                    dataArray[i].sales++
                } else if (dataArray[i].name === this.getFullMonth(new Date(c.firstContact))) {
                    dataArray[i].sales++
                }
            }
        }
        return dataArray
    }



    render() {
        let data = this.generateData(this.state.select)

        return (
            <div id="salesByCountryChart">
                <div className="title">Sales By
                    <select name="select" id="" onChange={this.changeValue}>
                        <option value="country">Country</option>
                        <option value="owner">Owner</option>
                        <option value="emailType">Email Type</option>
                        <option value="month">Month</option>
                    </select>
                </div>
                <ResponsiveContainer width="100%" height="90%">

                    <BarChart
                        data={data}
                        margin={{
                            top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis dataKey="sales" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="sales" fill="green" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        );
    }
}

export default SalesByCountryChart;