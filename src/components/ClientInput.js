import React, { Component } from 'react';
import '../style/ClientInput.css';


class ClientInput extends Component {
    constructor(){
        super()
        this.state={
            name: ""
        }
    }

    // changeValue = event => this.setState({ [event.target.name]: event.target.value })
    
    saveName = event => this.setState({ name: event.target.value })

    render() {
        return (
            <div id="clientInput">
                <span>Client Name:  </span>
                <input list="namesList" name="id" onInput={this.saveName}/>
                <datalist id="namesList">
                    {this.props.clients.map((client, i)  => <option key={i} value={client.name} />)}
                </datalist>
            </div>
        );
    }
}

export default ClientInput;