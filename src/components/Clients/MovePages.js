import React, { Component } from 'react';
import '../../style/MovePages.css';


class MovePages extends Component {

    increase = () => this.props.handleViewCount(true)

    decrease = () => this.props.handleViewCount(false)

    render() {
        return (
            <div id="movePages">
                <i className="fas fa-arrow-left" onClick={this.decrease}></i>
                {this.props.viewCount}  -
                {this.props.length >= this.props.viewCount + 19 ?
                    this.props.viewCount + 19 :
                    "END"}
                <i className="fas fa-arrow-right" onClick={this.increase}></i>
            </div>
        );
    }
}

export default MovePages;