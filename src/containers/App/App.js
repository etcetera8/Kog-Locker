import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, NavLink, withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { addUserData, addUserStats, addUserActivities, addUserTarget, loginUserAction, addToken } from '../../actions/actionIndex.js';
import { initialCall, segmentCall, statsCall, activitiesCall, getUser, photosCall } from '../../api.js';
import  Login  from '../../components/Login/Login';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import PhotoGallery from '../../components/PhotoGallery/PhotoGallery';
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
      error: false,
      photoArray: [],
      pageCount: 1
    };
  }
  
  async componentDidMount() {    
    const tokenAndAthlete = await getUser();
    this.props.addToken(tokenAndAthlete);
    const { access_token, athlete } = tokenAndAthlete;

    try {
      const userData = await initialCall(access_token);
      await this.props.setUserData(userData);
    } catch (error) {
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
    const photoArray = await photosCall(9560317, 1);
    this.setState({photoArray});
     
    if (this.props.token.message) {      
      this.props.history.push('login');
    }
  }

  lazyLoad = async () => {
    try {
      const number = this.state.pageCount += 1;
      this.setState({pageCount: number});
      const morePhotos = await photosCall(9560317, number);
      const fullArray = [...this.state.photoArray, ...morePhotos];
      this.setState({photoArray: fullArray});
    } catch (error) {
      console.log('no more photos');
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
          </div>
          <PhotoGallery 
            photoArray={this.state.photoArray}
            lazyLoad={this.lazyLoad}/>
          <Footer />
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
  setUserTarget: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
  loginStatus: PropTypes.func.isRequired,
  token: PropTypes.object.isRequired,
  addToken: PropTypes.func.isRequired
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
