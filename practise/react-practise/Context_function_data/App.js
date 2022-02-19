import React, { Component } from 'react'
import User from './User';


export const MyContext = React.createContext();

export default class App extends Component {
    state = {
        name : "Tasin",
        value : 10
    }
    handleClick = ()=>{
        this.setState({value : this.state.value + 1});
    }
    render() {
        const contextValue = {
            data : this.state,
            handle : this.handleClick
        }
        return (
            <React.Fragment>
                <MyContext.Provider value={contextValue}>
                    <User />
                </MyContext.Provider>
            </React.Fragment>
        )
    }
}
