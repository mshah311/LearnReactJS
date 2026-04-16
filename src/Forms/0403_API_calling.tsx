// APPI call --- https://jsonplaceholder.typicode.com/users

import React, { Component } from "react";
import GetAPIdata from "./0403_API_getdata";

class UserfmAPI extends Component { 

state = {contacts:[]}
componentDidMount(): void {
    fetch("https://jsonplaceholder.typicode.com/users") 
    .then (e => e.json())
    .then ((f)=> {this.setState({contacts:f})} ) 
    .catch(console.log)
}
    render() { return( <div>    
        <GetAPIdata contacts={this.state.contacts}/>

    </div> );  }

  }

export default UserfmAPI;
