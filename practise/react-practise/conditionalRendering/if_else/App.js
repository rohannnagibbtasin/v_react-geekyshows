import React, { Component } from 'react'
import User from './User'
import Guest from './Guest'
export default class App extends Component {
    state = {
        isLoged : false
    }
    clickLogin = ()=>{
        this.setState({isLoged : true})
    }
    clickLogout =()=>{
        this.setState({isLoged : false})
    }
    render() {
        const isLogged = this.state.isLoged
        let consumer;
        if(isLogged){
            consumer =  <User logout = {this.clickLogout} />
        }else{
            consumer =  <Guest login ={this.clickLogin} />
        }
        return <div>{consumer }</div>
    }
}
