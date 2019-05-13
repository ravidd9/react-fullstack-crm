import React, { Component } from 'react';
import '../../style/ClientsFields.css';


class ClientsFields extends Component {
    render() {
        return (
            <div id="clientsFields">
                <div>Name</div>
                <div>Surename</div>
                <div>Country</div>
                <div>First Contact</div>
                <div>Email</div>
                <div>Sold</div>
                <div>Owner</div>
            </div>
        );
    }
}

export default ClientsFields;