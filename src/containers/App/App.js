import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { addUserData, addUserStats, addUserActivities, addUserTarget } from '../../actions/actionIndex.js';
import { initialCall, segmentCall, statsCall, activitiesCall } from '../../api.js';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import StatsCard from '../../components/StatsCard/StatsCard';
import BadgeCard from '../../components/BadgeCard/BadgeCard';
import MapCard from '../../components/MapCard/MapCard';
import Home from '../../components/Home/Home';
import StatsContainer from '../StatsContainer/StatsContainer';
import BadgeContainer from '../BadgeContainer/BadgeContainer';
import TargetContainer from '../TargetContainer/TargetContainer';
import './App.css';

class App extends Component {
  
  async componentDidMount() {
    const userData = await initialCall();
    await this.props.setUserData(userData);
    
    const userStats = await statsCall(9560317);
    await this.props.setUserStats(userStats);
    
    const userActivities = await activitiesCall(9560317);
    await this.props.setUserActivities(userActivities);
    
    if (!localStorage.getItem('target')) {
      const userTarget = await segmentCall(609371);
      await this.props.setUserTarget(userTarget);
    } else {
      const segment = JSON.parse(localStorage.getItem('target'));
      //const userTarget = await segmentCall(609371);
      await this.props.setUserTarget(segment)
    }
  }

  render() {
    const { firstname, profile_medium } = this.props.userData;

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
        
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/stats" component={StatsContainer} />
          <Route path="/achievments" component={BadgeContainer} />
          <Route path="/target" component={TargetContainer} />
        </div>

        <Footer />

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

App.propTypes = {
  userStats: PropTypes.object.isRequired,
  userData: PropTypes.object.isRequired,
  setUserData: PropTypes.func.isRequired,
  setUserStats: PropTypes.func.isRequired,
  setUserActivities: PropTypes.func.isRequired,
  setUserTarget: PropTypes.func.isRequired,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
