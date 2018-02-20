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
      segmentError: false,
      loading: false
    }
  }

  changeHelper = (e) => {
    this.setState({segmentId: e.target.value })
  }

  helper = async (e) => {
    //15990214
    e.preventDefault();
    const response = await segmentCall(this.state.segmentId)
    console.log(response);
    if (response.message) {
      this.setState({ segmentError: true, segmentId: '' })
      console.log("im a type error")
    } else {
      this.setState({ segmentError: false, segmentId: '' })
      this.props.setUserTarget(response);
      localStorage.setItem('target', JSON.stringify(response));
    }
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

          <form>
            <input
              className="new-segment-input"
              type='text' 
              placeholder="Add new segment ID#" 
              value={this.state.segmentId}
              onChange={this.changeHelper}
            />

            <button 
              onClick={this.helper}
              className="new-segment-button"
              >
                <i class="fas fa-plus"></i>
            </button>
            {this.state.segmentError && 
              <p className="error-message">You must put in a valid segment ID</p>
            }
          </form>
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