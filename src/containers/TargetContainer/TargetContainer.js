import React, { Component } from 'react';
import { connect } from 'react-redux';
import MapCard from '../../components/MapCard/MapCard';
import { GoogleApiWrapper } from 'google-maps-react';
import {gKey} from '../../apiKey.js'
import { addUserTarget } from '../../actions/actionIndex'
import { segmentCall } from '../../api';
import './TargetContainer.css';

class TargetContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      segmentId: '',
      loading: false
    }
  }

  changeHelper = (e) => {
    this.setState({segmentId: e.target.value })
  }

  helper = async () => {
    //15990214
    console.log(this.state.segmentId);
    const response = await segmentCall(this.state.segmentId)
    console.log(response, this.props);
    this.props.setUserTarget(response);
    localStorage.setItem('target', JSON.stringify(response));
  }
  
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

          <input
            className="new-segment-input"
            type='text' 
            placeholder="Add a New Segment by it's ID#" 
            value={this.state.segmentId}
            onChange={this.changeHelper}
          />

          <button 
            onClick={this.helper}
            className="new-segment-button"
            >
              <i class="fas fa-plus"></i>
          </button>
        </div>
      </main>
    )
  }
  
}

const mapStateToProps = (state) => ({
  userTarget: state.userTarget
})

const mapDispatchToProps = (dispatch) => ({
  setUserTarget: (data) => dispatch(addUserTarget(data))
})

const wrapper = GoogleApiWrapper({apiKey:gKey})(TargetContainer)

export default connect(mapStateToProps, mapDispatchToProps)(wrapper)