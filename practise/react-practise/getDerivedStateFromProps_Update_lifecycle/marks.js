import React, { Component,Fragment } from 'react'

export default class Marks extends Component {
    constructor(props){
        super(props);
        this.state = {
            mroll: this.props.roll
        }
    }
    static getDerivedStateFromProps(props,state){
        if(props.roll !== state.mroll){
            return {mroll : props.roll}
        }
        return null
    }
    render() {
        return (
            <Fragment>
                <h1>{this.state.mroll}</h1>
            </Fragment>
        )
    }
}
