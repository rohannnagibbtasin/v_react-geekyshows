import React, { Component } from 'react'
import axios from 'axios';
import { config } from 'yargs';
//import { config } from 'yargs';

export default class App extends Component {
  
  handleClick=()=>{
    config = {
      url : 'http://localhost/mvc/react/show.php',
      method : 'GET',
      headers : {'Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'GET','Access-Control-Allow-headers':'Accept,Authorization,Content-Type'}
    }
    axios(config).then(res=>{
      console.log(res);
    })
  }
  
  render(){
    return (
      <button onClick={this.handleClick}>Submit</button>  
    )
  }
}
// export default class App extends Component {
//   handleClick = ()=>{
//     fetch('http://localhost/mvc/react/show.php').then(res=>{
//       if(!res.ok){
//         throw Error(res.statusText)
//       }else{
//         return res.json().then(data=>{
//           console.log(data);
//         })
//       }
//     })
//   }
//   render() {
//     return (
//       <button onClick={this.handleClick}>Submit</button>  
//     )
//   }
// }
