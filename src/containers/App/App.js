import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, NavLink, withRouter } from 'react-router-dom';

import { addUserData, addUserStats, addUserActivities, addUserTarget } from '../../actions/actionIndex.js';
import { initialCall, segmentCall, statsCall, activitiesCall } from '../../api.js';

import Header from '../../components/Header/Header';
import StatsCard from '../../components/StatsCard/StatsCard';
import BadgeCard from '../BadgeCard/BadgeCard';
import MapCard from '../MapCard/MapCard';
import Routes from '../../components/Routes/Routes';
import Home from '../../components/Home/Home';
import './App.css';

class App extends Component {
  
  async componentDidMount() {
    console.log('props', this.props.userData);
    const userData = await initialCall();
    await this.props.setUserData(userData);
    
    const userStats = await statsCall(9560317);
    await this.props.setUserStats(userStats);
    
    // const userActivities = await activitiesCall(9560317);
    // await this.props.setUserActivities(userActivities);
    
    // const userTarget = await segmentCall(609371);
    // await this.props.setUserTarget(userTarget);
  }

  render() {
    const { firstname, profile_medium } = this.props.userData;
    console.log(firstname, profile_medium);
    console.log(this.props.userStats.yearStats);

   // console.log(count, distance, elapsed_time, elevation_gain);
    return (
      <div className="App">
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
        
        <main>
          <Route exact path="/" component={Home} />

          <BadgeCard />
          <MapCard />
        </main>

      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  userData: state.userData,
  userStats: state.userStats
})

const mapDispatchToProps = (dispatch) => ({
  setUserData: (data) => dispatch(addUserData(data)),
  setUserStats: (data) => dispatch(addUserStats(data)),
  setUserActivities: (data) => dispatch(addUserActivities(data)),
  setUserTarget: (data) => dispatch(addUserTarget(data))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
