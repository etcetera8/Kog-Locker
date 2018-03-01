import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  loginUserAction,
  addMap,
  addNewGoal
} from "../../actions/actionIndex.js";
import { loginUser } from '../../api';

class Login extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false
    };
  }

  componentDidMount() {
    console.log(loginUserAction)    
  }

  login = async () => {
    console.log(this.props);
    //loginUser();
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

export const mapStateToProps = (state) => ({
  loginStatus: state.loginStatus
});

export const mapDispatchToProps = (dispatch) => ({
  loginUser: (load) => dispatch(loginUserAction(load))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);