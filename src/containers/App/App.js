import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { addUserData, addUserStats, addUserActivities, addUserTarget } from '../../actions/actionIndex.js';
import { initialCall, segmentCall, statsCall, activitiesCall, getUser } from '../../api.js';
import {Login} from '../Login/Login'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Home from '../Home/Home';
import StatsContainer from '../StatsContainer/StatsContainer';
import BadgeContainer from '../BadgeContainer/BadgeContainer';
import TargetContainer from '../TargetContainer/TargetContainer';
import './App.css';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: true,
      error: false
    };
  }
  
    async componentDidMount() {
    getUser();
    // try {
    //   const userData = await initialCall();
    //   await this.props.setUserData(userData);
    // } catch (error) {
    //   this.setState({error: true});
    // }
    // try { 
    //   const userStats = await statsCall(9560317);
    //   await this.props.setUserStats(userStats);
    // } catch (error) {
    //   this.setState({error: true});
    // }
    // try {
    //   const userActivities = await activitiesCall(9560317);
    //   await this.props.setUserActivities(userActivities);
    // } catch (error) {
    //   this.setState({error: true});
    // }
    
    // if (!localStorage.getItem('target')) {
    //   try {  
    //     const userTarget = await segmentCall(609371);
    //     await this.props.setUserTarget(userTarget);
    //   } catch (error) {
    //     this.setState({error: true});
    //   }
    // } else {
    //   const segment = JSON.parse(localStorage.getItem('target'));
    //   await this.props.setUserTarget(segment);
    // }
  }

  render() {
    const { firstname, profile_medium } = this.props.userData;

    return (

      <div className="App">
        <div>
          <Login />
          <Header 
            userName={firstname}
            userPicture={profile_medium}
          />
          <nav>
            <NavLink exact to='/' activeClassName='selected'>Home</NavLink>
            <NavLink to='/stats' activeClassName='selected'>Your Stats</NavLink>
            <NavLink to='/achievments' activeClassName='selected'>Achievments</NavLink>
            <NavLink to='/target' activeClassName='selected'>Target Segment</NavLink>
          </nav>
          <div> 
            <Route exact path="/" component={Home} />
            <Route path="/stats" component={StatsContainer} />
            <Route path="/achievments" component={BadgeContainer} />
            <Route path="/target" component={TargetContainer} />
          </div>
          <Footer />
        </div>
        
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  userData: state.userData,
  userStats: state.userStats
});

export const mapDispatchToProps = (dispatch) => ({
  setUserData: (uData) => dispatch(addUserData(uData)),
  setUserStats: (uData) => dispatch(addUserStats(uData)),
  setUserActivities: (uData) => dispatch(addUserActivities(uData)),
  setUserTarget: (uData) => dispatch(addUserTarget(uData))
});

App.propTypes = {
  userStats: PropTypes.object.isRequired,
  userData: PropTypes.object.isRequired,
  setUserData: PropTypes.func.isRequired,
  setUserStats: PropTypes.func.isRequired,
  setUserActivities: PropTypes.func.isRequired,
  setUserTarget: PropTypes.func.isRequired
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
