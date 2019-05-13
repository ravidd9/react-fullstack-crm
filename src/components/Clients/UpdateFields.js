import React, { Component } from 'react';
import axios from 'axios'
import '../../style/UpdateFields.css';


class UpdateFields extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            surname: "",
            country: ""
        }
    }

    saveUpdate = async () => {
        let client = this.props.client
        client.name = this.state.name + " " + this.state.surname
        client.country = this.state.country
        console.log(client)
        await axios.put(`http://localhost:8000/client/${client._id}`, client)
        this.changeUpdateState()

    }

    componentDidMount =() =>{
        this.setState({
            name: this.props.client.name.split(' ')[0],
            surname: this.props.client.name.split(' ')[1],
            country: this.props.client.country
        })
    }

    changeInputValue = event => this.setState({ [event.target.name]: event.target.value })

    changeUpdateState = () => this.props.changeUpdateState()

    render() {
        return (
            <div className="updateFields">
                    <i className="fas fa-times-circle" onClick={this.changeUpdateState}></i>
                    <div className="updateForm">
                        <span>Name: </span>
                        <input name="name" value={this.state.name} onChange={this.changeInputValue} type="text" />
                        <span>Surname: </span>
                        <input name="surname" value={this.state.surname} onChange={this.changeInputValue} type="text" />
                        <span>Country: </span>
                        <input name="country" value={this.state.country} onChange={this.changeInputValue} type="text" />
                    </div>
                    <button onClick={this.saveUpdate}>Update</button>
            </div>
        );
    }
}

export default UpdateFields;