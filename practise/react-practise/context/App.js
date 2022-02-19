import React, { Component } from 'react'
import User from './User';


export const MyContext = React.createContext();

export default class App extends Component {
    state = {
        name : "Tasin"
    }
    render() {
        return (
            <React.Fragment>
                <MyContext.Provider value={this.state.name}>
                    <User />
                </MyContext.Provider>
            </React.Fragment>
        )
    }
}
