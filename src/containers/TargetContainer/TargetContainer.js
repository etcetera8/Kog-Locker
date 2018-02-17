import React, { Component } from 'react';
import { connect } from 'react-redux';
import MapCard from '../../components/MapCard/MapCard';
import { GoogleApiWrapper } from 'google-maps-react';
import {gKey} from '../../apiKey.js'

class TargetContainer extends Component {
  
  render() {
    return (
      <main>
        <MapCard google={this.props.google} />
      </main>
    )
  }
  
}

const mapStateToProps = (state) => ({
  userTarget: state.userTarget
})

const wrapper = GoogleApiWrapper({apiKey:gKey})(TargetContainer)

export default connect(mapStateToProps)(wrapper)