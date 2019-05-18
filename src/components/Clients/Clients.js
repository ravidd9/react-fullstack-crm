import React, { Component } from 'react';
import axios from 'axios'
import SearchClients from './SearchClients';
import ClientsFields from './ClientsFields';
import ClientRow from './ClientRow';
import MovePages from './MovePages';

class Clients extends Component {
    constructor() {
        super()
        this.state = {
            clients: [],
            input: "",
            select: "",
            viewCount: 1
        }
    }

    handleViewCount = (increase) => {
        if (increase && this.state.viewCount < this.state.clients.length) {
            this.setState({ viewCount: this.state.viewCount + 20 })
        } else if (!increase && this.state.viewCount >= 21) {
            this.setState({ viewCount: this.state.viewCount - 20 })
        }
    }

    saveValues = (input, select) => this.setState({ input, select , viewCount: 1})

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
        let viewCount = this.state.viewCount
        return (
            <div>
                <SearchClients saveValues={this.saveValues} />
                <MovePages viewCount={viewCount} handleViewCount={this.handleViewCount} />
                <ClientsFields />
                {this.state.input ?
                    this.state.clients.filter(c => c[this.state.select].toLowerCase().includes(this.state.input))
                        .slice(viewCount - 1, viewCount + 19)
                        .map((client, i) => <ClientRow key={i} client={client} />) :
                    this.state.clients.slice(viewCount - 1, viewCount + 19).map((client, i) => <ClientRow key={i} client={client} />)}
            </div>
        );
    }
}

export default Clients;