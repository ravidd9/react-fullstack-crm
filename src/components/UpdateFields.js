import React, { Component } from 'react';
import axios from 'axios'
import { async } from 'q';


class UpdateFields extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            surename: "",
            country: ""
        }
    }

    saveUpdate = async () => {
        let client = this.props.client
        client.name = this.state.name + " " + this.state.surename
        client.country = this.state.country
        await axios.put(`http://localhost:8000/client/${client._id}`, client)
        
    }

    changeInputValue = event => this.setState({ [event.target.id]: event.target.value })

    changeUpdateState = () => {
        this.props.changeUpdateState()
    }

    render() {
        console.log(this.props.client)
        return (
            <div className="updateFields">
                <i className="fas fa-times-circle" onClick={this.changeUpdateState}></i>
                <div className="updateForm">
                    <span>Name: </span>
                    <input id="name" value={this.props.client.name.split(' ')[0]} onChange={this.changeInputValue} type="text" />
                    <span>Surename: </span>
                    <input id="surename" value={this.props.client.name.split(' ')[1]} onChange={this.changeInputValue} type="text" />
                    <span>Country: </span>
                    <input id="country" value={this.props.client.country} onChange={this.changeInputValue} type="text" />
                </div>
                <button onClick={this.saveUpdate}>Update</button>
            </div>
        );
    }
}

export default UpdateFields;