import React, { Component } from 'react';
import '../../style/ClientInput.css';


class ClientInput extends Component {
    // changeValue = event => this.setState({ [event.target.name]: event.target.value })
    
    saveName = event => {
        this.props.saveName(event.target.value)
    }
    
    render() {
        return (
            <div id="clientInput">
                <span>Client Name:  </span>
                <input list="namesList" onInput={this.saveName}/>
                <datalist id="namesList">
                    {this.props.clients.map((client, i)  => <option key={i} value={client.name} />)}
                </datalist>
            </div>
        );
    }
}

export default ClientInput;