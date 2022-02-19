import React, { Component } from 'react'

export default class Image extends Component {
    render() {
        return (
            <img src={this.props.cobi} alt="My Pic" width="300px" height="300px"/>
        )
    }
}
