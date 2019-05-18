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
            filteredClients: [],
            input: "",
            select: "",
            viewCount: 1
        }
    }

    handleViewCount = (increase) => {
        let filteredClients = this.state.filteredClients
        if (increase && this.state.viewCount + 20 <= this.state.clients.length) {
            if (!this.state.input || (this.state.input && this.state.viewCount + 20 <= filteredClients.length)) {
                this.setState({ viewCount: this.state.viewCount + 20 })
            }
        } else if (!increase && this.state.viewCount >= 21) {
            this.setState({ viewCount: this.state.viewCount - 20 })
        }
    }

    saveValues = (input, select) => this.setState({ input, select, viewCount: 1, filteredClients: this.getFilteredClients(input, select) })

    getFilteredClients = (input, select) => this.state.clients.filter(c => c[select].toLowerCase().includes(input))

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
        let clients = this.state.clients
        let filteredClients = this.state.filteredClients
        return (
            <div>
                <SearchClients saveValues={this.saveValues} />
                <MovePages
                    viewCount={viewCount}
                    handleViewCount={this.handleViewCount}
                    length={filteredClients.length ? filteredClients.length : clients.length}
                />
                <ClientsFields />
                {this.state.input ?
                    clients.filter(c => c[this.state.select].toLowerCase().includes(this.state.input))
                        .slice(viewCount - 1, viewCount + 19)
                        .map((client, i) => <ClientRow key={i} client={client} />) :
                    clients.slice(viewCount - 1, viewCount + 19).map((client, i) => <ClientRow key={i} client={client} />)}
            </div>
        );
    }
}

export default Clients;