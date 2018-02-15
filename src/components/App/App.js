import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUserData, addUserStats, addUserActivities, addUserTarget } from '../../actions/actionIndex.js';
import { initialCall, segmentCall, statsCall, activitiesCall } from '../../api.js';
import Header from '../Header/Header';
import './App.css';

class App extends Component {
  
  async componentDidMount() {
    console.log('props', this.props.userData);
    const userData = await initialCall();
    await this.props.setUserData(userData);
    console.log(this.props.userData);
    
    // const userStats = await statsCall(9560317);
    // await this.props.setUserStats(userStats);
    
    // const userActivities = await activitiesCall(9560317);
    // await this.props.setUserActivities(userActivities);
    
    // const userTarget = await segmentCall(609371);
    // await this.props.setUserTarget(userTarget);
  }

  render() {
    const { firstname, profile_medium } = this.props.userData;
    return (
      <div className="App">
        <Header 
          userName={firstname}
          userPicture={profile_medium}
        />

        <main>
          
        </main>

      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  userData: state.userData
})

const mapDispatchToProps = (dispatch) => ({
  setUserData: (data) => dispatch(addUserData(data)),
  setUserStats: (data) => dispatch(addUserStats(data)),
  setUserActivities: (data) => dispatch(addUserActivities(data)),
  setUserTarget: (data) => dispatch(addUserTarget(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
