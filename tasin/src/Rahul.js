import React, { Component } from 'react'

export default class Rahul extends Component {
    state = {
        gunshots : 0
    }
    handle=()=>{
        this.setState({gunshots:this.state.gunshots + 1});
    }
    render() {
        return (
            <div>
                <h3 onMouseOver={this.handle}>Rahul Gunshots {this.state.gunshots} </h3>
            </div>
        )
    }
}
