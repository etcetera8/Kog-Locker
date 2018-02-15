import React, { Component } from 'react';
import { connect } from 'react-redux';
import MapCard from '../../components/MapCard/MapCard';

class TargetContainer extends Component {
  
  render() {
    return (
      <main>
        <MapCard />
      </main>
    )
  }
  
}

const mapStateToProps = (state) => ({
  userTarget: state.userTarget
})

export default connect(mapStateToProps)(TargetContainer)