import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUserAction } from "../../actions/actionIndex.js";
import { loginUser } from '../../api';
import './Login.css';
import PropTypes from "prop-types";


class Login extends Component {

  login = async () => {
    loginUser();
    this.props.loginUser(true);
  }

  render() {
    return (
      <div className='login-page'>
        <h1 className='login-title'>Kog Locker</h1>
        <button className='sign-in-btn' onClick={this.login}></button>
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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);