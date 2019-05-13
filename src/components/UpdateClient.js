import React, { Component } from 'react';
import '../style/UpdateClient.css';
import axios from 'axios'



class UpdateClient extends Component {
    constructor() {
        super()
        this.state = {
            owner: "Emily Durham",
            emailType: "A",
            changedOwner: false,
            sentEmail: false
        }
    }

    transferOwner = async () => {
        let client = this.props.clients.find(c => c.name === this.props.name)
        await axios.put(`http://localhost:8000/owner/${client._id}/${this.state.owner}`)
        this.setState({changedOwner: true})
    }
    
    sendEmail = async () => {
        let client = this.props.clients.find(c => c.name === this.props.name)
        await axios.put(`http://localhost:8000/emailType/${client._id}/${this.state.emailType}`)
        this.setState({sentEmail: true})
    }

    changeValue = event => this.setState({ [event.target.name]: event.target.value })

    getOwners = () => {
        let owners = new Set()
        this.props.clients.forEach(client => owners.add(client.owner))
        return Array.from(owners)
    }

    render() {
        let owners = this.getOwners()
        return (
            <div id="updateClient">
                <div>Transfer ownership to:  </div>
                <select name="owner" onChange={this.changeValue}>
                    {owners.map((owner, i) => <option key={i} value={owner}>{owner}</option>)}
                </select>
                <button onClick={this.transferOwner}>TRANSFER</button>
                <div className="message">
                    {this.state.changedOwner ?
                        `Client's owner has changed to ${this.state.owner}` :
                        null}
                </div>

                <div>Send email:  </div>
                <select name="emailType" onChange={this.changeValue}>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                </select>
                <button onClick={this.sendEmail}>SEND</button>
                <div className="message">
                    {this.state.sentEmail ?
                        `Sent email type ${this.state.emailType} to client` :
                        null}
                </div>

                <div>Decalre sale!  </div>
                <button>DECALRE</button>

            </div>
        );
    }
}

export default UpdateClient;