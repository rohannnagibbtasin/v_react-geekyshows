import React, { Component } from 'react'
import Marks from "./Marks"

export default class App extends Component {
    constructor(){
        super();
        this.state = {
            roll : 101
        }
    }
    change = ()=>{
        this.setState({roll : 300})
    }
    render() {
        console.log("App rendered");
        return (
            <React.Fragment>
                <Marks roll={this.state.roll} />
                <button onClick={this.change}>change</button>
            </React.Fragment>
        )
    }
}