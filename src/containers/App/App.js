import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, NavLink, withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { addUserData, addUserStats, addUserActivities, addUserTarget, loginUserAction, addToken } from '../../actions/actionIndex.js';
import { initialCall, segmentCall, statsCall, activitiesCall, getUser } from '../../api.js';
import  Login  from '../../components/Login/Login'
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
      loggedIn: false,
      error: false
    };
  }

  componentWillMount = () => {
    const url = window.location.href;
    const path = url.substr(url.length + 29);
    console.log(path);
    if (path === 'localhost:3000/exchange_token') {
      console.log('in the right place');
      
    } 
    if (!this.props.loginStatus) {
      //this.props.history.push('/login');
    }
  }
  
  async componentDidMount() {    
    const tokenAndAthlete = await getUser();
    this.props.addToken(tokenAndAthlete);
    const { access_token, athlete } = tokenAndAthlete;

    try {
      const userData = await initialCall(access_token);
      await this.props.setUserData(userData);
    } catch (error) {
      console.log('didnt work', error);
      this.setState({error: true});
    }

    try { 
      const userStats = await statsCall(access_token, athlete.id);
      await this.props.setUserStats(userStats);
    } catch (error) {
      this.setState({error: true});
    }
    try {
      const userActivities = await activitiesCall(athlete.id, access_token);
      await this.props.setUserActivities(userActivities);
      await this.props.loginUser(true);
    } catch (error) {
      this.setState({error: true});
    }
    
    if (!localStorage.getItem('target')) {
      try {  
        const userTarget = await segmentCall(609371, access_token);
        await this.props.setUserTarget(userTarget);
      } catch (error) {
        this.setState({error: true});
      }
    } else {
      const segment = JSON.parse(localStorage.getItem('target'));
      await this.props.setUserTarget(segment);
    }

    console.log(this.props.token);
    if (this.props.token.message) {
      console.log("Error getting message");
      
      this.props.history.push('login');
    }

  }

  render() {
    const { firstname, profile_medium } = this.props.userData;
    if (!this.props.loginStatus) {
      return <Route path="/login" component={Login} />;
    }

    if (this.props.loginStatus) {
      return (
        <div className="App">
          <Redirect to="/" />
          <div>
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
              <Route path="/login" component={Login} />
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
}


export const mapStateToProps = (state) => ({
  userData: state.userData,
  userStats: state.userStats,
  loginStatus: state.loginStatus,
  token: state.token
});

export const mapDispatchToProps = (dispatch) => ({
  setUserData: (uData) => dispatch(addUserData(uData)),
  setUserStats: (uData) => dispatch(addUserStats(uData)),
  setUserActivities: (uData) => dispatch(addUserActivities(uData)),
  setUserTarget: (uData) => dispatch(addUserTarget(uData)),
  loginUser: (load) => dispatch(loginUserAction(load)),
  addToken: (token) => dispatch(addToken(token))
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
