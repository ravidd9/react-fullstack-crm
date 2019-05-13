import React, { Component } from 'react';
import '../../style/Badge.css';


class Badge extends Component {
    constructor(){
        super()
        this.state ={
            badge : ""
        }
    }

    componentDidMount =() =>{

    }

    render() {
        return (
            <div className="badge">
                <div className={`icon ${this.props.color}`}><i className={this.props.badge.icon}></i></div>
                <div className="value">{this.props.badge.value}</div>
                <div className="text">{this.props.badge.text}</div>
            </div>
        );
    }
}

export default Badge;