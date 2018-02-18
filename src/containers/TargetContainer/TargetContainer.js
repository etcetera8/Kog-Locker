import React, { Component } from 'react';
import { connect } from 'react-redux';
import MapCard from '../../components/MapCard/MapCard';
import { GoogleApiWrapper } from 'google-maps-react';
import {gKey} from '../../apiKey.js'

class TargetContainer extends Component {
  
  render() {
    const {average_grade, distance, elevation_high, elevation_low, athlete_segment_stats} = this.props.userTarget
    return (
      <main>
        <MapCard 
          google={this.props.google}
          userTarget={this.props.userTarget}
        />

        <div className='card'>
          <p>Grade: {average_grade}%</p>
          <p>Distance: {(distance / 1000).toFixed(2)} kilometers</p>
          <p>Elevation Gain: {(elevation_high - elevation_low).toFixed(2)} meters</p>
          {athlete_segment_stats && 
          <p>Number of attempts: {athlete_segment_stats.effort_count} </p>
          }
        </div>
      </main>
    )
  }
  
}

const mapStateToProps = (state) => ({
  userTarget: state.userTarget
})

const wrapper = GoogleApiWrapper({apiKey:gKey})(TargetContainer)

export default connect(mapStateToProps)(wrapper)