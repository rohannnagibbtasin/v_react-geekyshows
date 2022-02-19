import React, { Component } from 'react';
import Pic from './pic.jpg';
import Image from './Image';
import Error from './Error'
export default class App extends Component {
    render() {
        if(this.props.cobi === "Tasin"){
            throw new Error("Image not Found")
        }
        return (
            <div>
                <Error>
                <Image cobi = {Pic} /><br />
                </Error>
                <Error>
                <Image cobi = "Tasin" />
                </Error>
            </div>
        )
    }
}
