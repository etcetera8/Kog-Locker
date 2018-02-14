import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUserData, addUserStats } from '../../actions/actionIndex.js';
import { initialCall, segmentCall, statsCall, activitiesCall } from '../../api.js';
import './App.css';
//console.log(addUserData);

class App extends Component {
  
  async componentDidMount() {
    console.log('props', this.props);
    // const userData = await initialCall();
    // await this.props.setUserData(userData);
    
    // const userStats = await statsCall(9560317)
    // await this.props.setUserStats(userStats)
    
    // segmentCall(609371);
    // statsCall(9560317);
    // activitiesCall(9560317);
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
  setUserStats: (data) => dispatch(addUserStats(data))
})


export default connect(null, mapDispatchToProps)(App);
