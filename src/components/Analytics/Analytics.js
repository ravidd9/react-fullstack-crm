import React, { Component } from 'react';
import AllBadges from './AllBadges';
import AllCharts from './AllCharts';
import axios from 'axios'


class Analytics extends Component {
    constructor(){
        super()
        this.state = {
            clients: []
        }
    }

    getClients = async () => {
        let clients = await axios.get('http://localhost:8000/clients')
        return clients.data
    }

    componentDidMount = async () => {
        let clients = await this.getClients()
        this.setState({ clients })
        console.log(this.state.clients)
    }


    render() {
        return (
            <div>
                <AllBadges clients={this.state.clients}/>
                <AllCharts />
            </div>
        );
    }
}

export default Analytics;