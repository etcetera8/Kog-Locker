import React, { Component } from 'react';
import { loginUser } from '../../api';

export class Login extends Component {
  constructor(){
    super()  
    this.state = {
      loggedIn: false
    }
  }

  componentDidMount() {
      
  }

  login = async () => {
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