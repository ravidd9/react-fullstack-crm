import React, { Component } from 'react';
import ClientInput from './ClientInput';
import UpdateClient from './UpdateClient';
import AddClient from './AddClient';
import axios from 'axios'
import '../style/Actions.css';



class Actions extends Component {
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
            <div id="actions">
                <h2>UPDATE</h2>
                <ClientInput clients={this.state.clients} />
                <UpdateClient />
                <hr></hr>
                <AddClient />
            </div>
        );
    }
}

export default Actions;