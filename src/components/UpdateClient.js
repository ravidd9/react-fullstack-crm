import React, { Component } from 'react';
import '../style/UpdateClient.css';


class UpdateClient extends Component {
    render() {
        return (
            <div id="updateClient">
                <div>Transfer ownership to:  </div>
                <select>
                    <option value="Owner">Owner</option>
                </select>
                <button>TRANSFER</button>

                <div>Send email:  </div>
                <select>
                    <option value="Email Type">Email Type</option>
                </select>
                <button>SEND</button>

                <div>Decalre sale!  </div>
                <button>DECALRE</button>

            </div>
        );
    }
}

export default UpdateClient;