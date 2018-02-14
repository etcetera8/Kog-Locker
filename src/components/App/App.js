import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUserData } from '../../actions/actionIndex.js';
import { initialCall, segmentCall, statsCall, activitiesCall } from '../../api.js';
import './App.css';
console.log(addUserData);
class App extends Component {
  
  componentDidMount() {
    // initialCall();
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

export default App;
