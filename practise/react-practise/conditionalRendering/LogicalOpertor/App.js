import React, { Component } from 'react'
import User from './User'
//import Guest from './Guest'
export default class App extends Component {
    render() {
        const prime = this.props.consumer
        return(
            <React.Fragment>
                <h3>Welcome User</h3>
                {prime && <User />}
            </React.Fragment>
        )
    }
}
