import React, { Component } from 'react';
import { loginUser } from '../../api';

export class Login extends Component {
  constructor(){
    super()  
    this.state = {
      loggedIn: false
    }
  }

  async componentDidMount() {
    const url = window.location.href;
    const token = url.substr(url.length - 40);
    console.log(url);
    console.log(token);

    const options = { 
      method: "POST", 
      headers: { Accept: "application/json", "Content-Type": "application/json" }, 
                 mode: "cors", 
                 cache: "no-cache", 
                 body: JSON.stringify(
                  {
                    token: token
                  }
                 ) };

    const response = await fetch("http://localhost:3100/tokenexchange", options)
      .then(response => response.json())
      .then(json => {
        console.log(json.access_token);
      });

      console.log(response);
      
    
  }

  login = () => {
    console.log('clicked');
    loginUser()
    
  }

  render() {
    return (
      <div>
        <button onClick={this.login}>login</button>
        <p>hi</p>
      </div>
    )
  }
}