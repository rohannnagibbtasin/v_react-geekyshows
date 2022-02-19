import React, { Component } from 'react'
import {MyContext} from './App'
export default class Guest extends Component {
    render() {
        return (
            <div>
                <h3>Guest Component</h3>
                <MyContext.Consumer>
                    {
                        ({data,handle})=>(
                            <div>
                                <h4>Name : {data.name} Value : {data.value} </h4>
                                <button onClick={handle}>Click</button>
                            </div>
                        )
                    }
                </MyContext.Consumer>
            </div>
        )
    }
}