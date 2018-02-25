import React, { Component } from 'react';
import { connect } from 'react-redux';
import MapCard from '../../components/MapCard/MapCard';
import { GoogleApiWrapper } from 'google-maps-react';
import { gKey } from '../../apiKey.js';
import { addUserTarget } from '../../actions/actionIndex';
import { segmentCall } from '../../api';
import PropTypes from 'prop-types';
import './TargetContainer.css';

export class TargetContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      segmentError: false,
      loading: false
    };
  }

  changeHelper = (event) => {
    this.setState({ input: event.target.value });
  }

  helper = async (event) => {
    //15990214
    //2628520
    event.preventDefault();
    const response = await segmentCall(this.state.input);
    debugger;
    if (response.message) {
      this.setState({ segmentError: true, input: '' });
    } else {
      this.setState({ segmentError: false, input: '' });
      this.props.setUserTarget(response);
      localStorage.setItem('target', JSON.stringify(response));
      window.location.reload();
    }
  }

  render() {
    const {average_grade, distance, elevation_high, elevation_low, athlete_segment_stats} = this.props.userTarget;
    
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
              value={this.state.input}
              onChange={this.changeHelper}
            />

            <button 
              onClick={this.helper}
              className="new-segment-button"
            >
              <i className="fas fa-plus"></i>
            </button>
            {this.state.segmentError && 
              <p className="error-message">You must put in a valid segment ID</p>
            }
          </form>
        </div>
      </main>
    );
  }
  
}

export const mapStateToProps = (state) => ({
  userTarget: state.userTarget
});

export const mapDispatchToProps = (dispatch) => ({
  setUserTarget: (targetData) => dispatch(addUserTarget(targetData))
});

const wrapper = GoogleApiWrapper({apiKey:gKey})(TargetContainer);

TargetContainer.propTypes = {
  userTarget: PropTypes.object.isRequired,
  google: PropTypes.object.isRequired,
  setUserTarget: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(wrapper);