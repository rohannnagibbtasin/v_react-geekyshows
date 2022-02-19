import React, { Component } from 'react'

export default class User extends Component {
    render() {
        return (
            <div>
                <h1>Welcome Rahul</h1>
                <button onClick={this.props.logout}>Logout</button>
            </div>
        )
    }
}
