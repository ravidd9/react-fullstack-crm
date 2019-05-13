import React, { Component } from 'react';
import '../../style/ClientRow.css';
import UpdateFields from './UpdateFields';


class ClientRow extends Component {
    constructor() {
        super()
        this.state = {
            update: false
        }
    }

    changeUpdateState = () => this.setState({ update: !this.state.update })

    render() {
        let client = this.props.client
        let date = new Date(client.firstContact)
        return (
            <div>
                {this.state.update ? <UpdateFields client={this.props.client} changeUpdateState={this.changeUpdateState} /> : null}
                <div className="clientRow" onClick={this.changeUpdateState}>
                    <div>{client.name.split(' ')[0]}</div>
                    <div>{client.name.split(' ')[1]}</div>
                    <div>{client.country}</div>
                    <div>{date.getDate()}/{Number(date.getMonth())+1}/{date.getFullYear()}</div>
                    <div>{client.emailType}</div>
                    <div>{client.sold ? <i className="fas fa-check"></i> : "-"}</div>
                    <div>{client.owner}</div>
                </div>
            </div>
        );
    }
}

export default ClientRow;