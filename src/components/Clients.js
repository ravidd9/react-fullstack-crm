import React, { Component } from 'react';
import axios from 'axios'
import SearchClients from './SearchClients';
import ClientsFields from './ClientsFields';
import ClientRow from './ClientRow';

class Clients extends Component {
    constructor() {
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
        // this.postClients()
    }

    // postClients = async () =>{
    //   let data = require('./data.json')
    //   console.log(data)
    //   data.map(async client => await axios.post('http://localhost:8000/client', client))
    // }

    render() {
        return (
            <div>
                <SearchClients />
                <ClientsFields />
                {this.state.clients.map((client, i) => <ClientRow key={i} client={client}/>)}
            </div>
        );
    }
}

export default Clients;