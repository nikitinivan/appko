import React, { Component } from 'react';


class Input extends Component {
    render() {
        return (
            <div className="forminput">
                <div className="ui fluid action input forminput">
                    <input type="text" placeholder="Your location" value={this.props.location} />
                    <button className="ui button blue" onClick={this.props.handleClick}>Call Tow Truck</button>
                </div>
            </div>
        );
    }
}

export default Input;
