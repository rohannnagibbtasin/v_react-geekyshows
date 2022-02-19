import React, { Component } from 'react'

export default class Guest extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Welcome Guest</h1>
                <button onClick={this.props.login}>Login</button>
                <button>Sign UP</button>
            </React.Fragment>
        )
    }
}
