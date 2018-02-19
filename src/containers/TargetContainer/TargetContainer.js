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
          <span className='card-data'>Grade: <span className='nums'>{average_grade}%</span></span>
          <span className='card-data'>Distance: <span className='nums'>{distance} miles</span></span>
          <span className='card-data'>Elevation Gain: <span className='nums'>{(elevation_high - elevation_low)} ft</span></span>
          {athlete_segment_stats && 
          <span className='card-data'>Number of attempts: <span className='nums'>{athlete_segment_stats.effort_count} </span></span>
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