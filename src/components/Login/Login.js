import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUserAction } from '../../actions/actionIndex.js';
import { loginUser } from '../../api';

export class Login extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false
    };
  }

  componentDidMount() {

  }

  login = async () => {
    console.log(this.props);
    loginUser();
  }

  render() {
    return (
      <div>
        <button onClick={this.login}>login</button>
        <p>hi</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loginStatus: state.loginStatus
});

export default connect(mapStateToProps)(Login);