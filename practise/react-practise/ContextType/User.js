import React, { Component } from 'react'
import Guest from './Guest'
export default class User extends Component {
    render() {
        return (
            <React.Fragment>
                <h3>User Comnonent</h3>
                <Guest />
            </React.Fragment>
        )
    }
}
