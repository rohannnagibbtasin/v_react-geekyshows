import React, { Component } from 'react'
import {MyContext} from './Context'
export default class Guest extends Component {
    static contextType = MyContext;
    componentDidMount=()=>{
        console.log(this.context);
    }
    render() {
        return (
            <div>
                <h3>Guest Component</h3>
                    <h4>Name : {this.context.data.name} Value : {this.context.data.value} </h4>
                    <button onClick={this.context.handle}>Click</button>       
            </div>
        )
    }
}