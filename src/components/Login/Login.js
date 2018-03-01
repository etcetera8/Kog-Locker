import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  loginUserAction,
  addMap,
  addNewGoal
} from "../../actions/actionIndex.js";
import { loginUser, getUser } from '../../api';
import './Login.css';

class Login extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false
    };
  }

  componentDidMount() {
  
  }

  login = async () => {
    //loginUser();
    // this.props.loginUser(true);
    // this.props.history.push('/home');
  }

  render() {
    return (
      <div className='login-page'>
        <button className="sign-in-btn" onClick={this.login}>login</button>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  loginStatus: state.loginStatus
});

export const mapDispatchToProps = (dispatch) => ({
  loginUser: (load) => dispatch(loginUserAction(load))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);