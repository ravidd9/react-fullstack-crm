import React, { Component } from 'react';
import AllBadges from './AllBadges';
import AllCharts from './AllCharts';
import axios from 'axios'
import Loader from './Loader';


class Analytics extends Component {
    constructor() {
        super()
        this.state = {
            clients: [],
            isReloading: true
        }
    }

    getClients = async () => {
        let clients = await axios.get('http://localhost:8000/clients')
        return clients.data
    }

    componentDidMount = async () => {
        let clients = await this.getClients()
        this.setState({ clients, isReloading: false })
        console.log(this.state.clients)
    }


    render() {
        return (
            <div id="analytics">
                {this.state.isReloading ?
                    <Loader /> :
                    <div>
                        <AllBadges clients={this.state.clients} />
                        <AllCharts clients={this.state.clients} />
                    </div>
                }
            </div>
        );
    }
}

export default Analytics;