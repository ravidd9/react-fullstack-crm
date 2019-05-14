import React, { Component, PureComponent } from 'react';
import { ResponsiveContainer, ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';
import '../../style/TopEmployeesChart.css';


class TopEmployeesChart extends Component {

    getOwners = () => {
        let owners = new Set()
        this.props.clients.forEach(client => owners.add(client.owner))
        return Array.from(owners)
    }

    getTopThree =(employees) =>{
        while(employees.length > 3){
            let min = Math.min(employees[0].sales, employees[1].sales, employees[2].sales, employees[3].sales)
            employees.splice(employees.findIndex(e => e.sales === min),1)
        }
        return employees
    }

    generateData = () =>{
        let owners = this.getOwners()
        let employees = []
        owners.forEach(owner => employees.push({name: owner, sales: 0}))
        this.props.clients.forEach(c => {
            for(let i in employees){
                if(employees[i].name == c.owner){
                    employees[i].sales ++
                }
            }
        })
        employees = this.getTopThree(employees)
        return employees
    }

    render() {
        let employees = this.generateData()
        return (
            <div id="topEmployeesChart">
                    <div className="title">Top Employees</div>
                {/* <ResponsiveContainer width="100%" height="80%"> */}
                    <ComposedChart
                        layout="vertical"
                        width={500}
                        height={250}
                        data={employees}
                        margin={{
                            top: 20, right: 20, bottom: 20, left: 20,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="sales" type="number" />
                        <YAxis dataKey="name" type="category" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="sales" barSize={20} fill="#413ea0" />
                    </ComposedChart>
                {/* </ResponsiveContainer> */}
            </div>
        );
    }
}

export default TopEmployeesChart;