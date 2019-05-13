import React, { Component } from 'react';
import '../../style/AddClient.css';
import axios from 'axios'


class AddClient extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            surname: "",
            country: "",
            owner: "",
            saved: false
        }
    }

    changeValue = event => this.setState({ [event.target.name]: event.target.value})

    addNewClient = async () => {
        let client = {
            name: this.state.firstName + " " + this.state.surname,
            country: this.state.country,
            owner: this.state.owner,
            firstContact: new Date(),
            sold: false,
            email: "",
            emailType: null
        }
        await axios.post('http://localhost:8000/client', client)
        this.setState({saved: true })
    }

    render() {
        return (
            <div id="addClient">
                <h2>ADD CLIENT</h2>
                <div id="addClientForm">
                    <div>First name:</div>
                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.changeValue} />
                    <div>Surname:</div>
                    <input type="text" name="surname" value={this.state.surname} onChange={this.changeValue} />
                    <div>Country:</div>
                    <input type="text" name="country" value={this.state.country} onChange={this.changeValue} />
                    <div>Owner:</div>
                    <input type="text" name="owner" value={this.state.owner} onChange={this.changeValue} />
                </div>
                <button onClick={this.addNewClient}>Add New Client</button>
                {this.state.saved ?
                    <div id="saved">CLIENT {this.state.firstName + " " + this.state.surname} SAVED</div> :
                    null}
            </div>
        );
    }
}

export default AddClient;