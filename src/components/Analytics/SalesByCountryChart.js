import React, { Component, PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';
import '../../style/SalesByCountryChart.css';


class SalesByCountryChart extends Component {

    getCountries = () => {
        let Allcountries = new Set()
        this.props.clients.forEach(client => Allcountries.add(client.country))
        return Array.from(Allcountries)
    }

    generateDate = () =>{
        let Allcountries = this.getCountries()
        let countries = []
        Allcountries.forEach(country => countries.push({name: country, sales: 0}))
        this.props.clients.forEach(c => {
            for(let i in countries){
                if(countries[i].name == c.country){
                    countries[i].sales ++
                }
            }
        })
        return countries
    }

    render() {
        let countries = this.generateDate()

        return (
            <div id="salesByCountryChart">
                <div className="title">Sales By Country</div>
                <BarChart
                    width={900}
                    height={250}
                    data={countries}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis dataKey="sales"/>
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sales" fill="green" />
                </BarChart>

            </div>
        );
    }
}

export default SalesByCountryChart;