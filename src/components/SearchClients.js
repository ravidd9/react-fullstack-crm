import React, { Component } from 'react';
import '../style/SearchClients.css';


class SearchClients extends Component {
    constructor() {
        super()
        this.state = {
            input: "",
            select: "name"
        }
    }

    saveValues = () => this.props.saveValues(this.state.input.toLowerCase(), this.state.select)

    changeValue = async (event) =>{
        await this.setState({ [event.target.name]: event.target.value })
        this.saveValues() 
    }

    render() {
        return (
            <div id="searchClients">
                <input  name="input" type="text" placeholder="Search" onChange={this.changeValue} value={this.state.input} />
                <select name="select" onChange={this.changeValue} value={this.state.select}>
                    <option value="name">Name</option>
                    <option value="country">Country</option>
                    <option value="owner">Owner</option>
                </select>
            </div>
        );
    }
}

export default SearchClients;