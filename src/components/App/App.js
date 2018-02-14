import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUserData, addUserStats, addUserActivities, addUserTarget } from '../../actions/actionIndex.js';
import { initialCall, segmentCall, statsCall, activitiesCall } from '../../api.js';
import './App.css';
//console.log(addUserData);

class App extends Component {
  
  async componentDidMount() {
    //console.log('props', this.props);
    // const userData = await initialCall();
    // await this.props.setUserData(userData);
    
    // const userStats = await statsCall(9560317);
    // await this.props.setUserStats(userStats);
    
    // const userActivities = await activitiesCall(9560317);
    // await this.props.setUserActivities(userActivities);
    
    // const userTarget = await segmentCall(609371);
    // await this.props.setUserTarget(userTarget);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }

}

const mapDispatchToProps = (dispatch) => ({
  setUserData: (data) => dispatch(addUserData(data)),
  setUserStats: (data) => dispatch(addUserStats(data)),
  setUserActivities: (data) => dispatch(addUserActivities(data)),
  setUserTarget: (data) => dispatch(addUserTarget(data))
})

export default connect(null, mapDispatchToProps)(App);
