import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { addMap, addNewGoal } from '../../actions/actionIndex';
import './MapCard.css';
import loadingGif from '../../assets/Spinner-1s-144px.gif';
import PropTypes from 'prop-types';

export class MapCard extends Component {
  constructor() {
    super();
    this.state = {
      newTime:0,
      loading: true
    };
  }

  async componentDidUpdate() {
    const { polyline } = this.props.userTarget;
    if (!this.props.targetMap) {
      await this.loadMap(polyline);
    }
  }

  componentDidMount() {
    if (this.props.targetMap && this.props.userTarget) {
      const { polyline } = this.props.userTarget;
      const mapConfig = this.initialMap();
      const decodedPolyline = this.decodePolyline(polyline);
      decodedPolyline.setMap(mapConfig);
      this.setState({ loading: false});
    }
  }

  initialMap() {
    const { end_latlng } = this.props.userTarget;
    const lat = end_latlng[0];
    const lng = end_latlng[1];
    const node = ReactDOM.findDOMNode(this.refs.map);
    const mapConfig = new this.props.google.maps.Map(node, {
      zoom: 12,
      center: {lat, lng},
      mapTypeId: 'terrain'
    });
    return mapConfig;
  }

  decodePolyline(targetPolyline) {
    const decodedSets = this.props.google.maps.geometry.encoding.decodePath(targetPolyline);
    const array = decodedSets.map(coord => JSON.stringify(coord));
    const parsedArray = array.map(coord => JSON.parse(coord));
    this.props.addMap(parsedArray);

    const polyline = new this.props.google.maps.Polyline({
      path: parsedArray,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0
    });
    return polyline;
  }

  loadMap = (targetPolyline) => {
    if (this.props.userTarget && this.props.google.maps.geometry.encoding) {
      const node = ReactDOM.findDOMNode(this.refs.map);
      const mapConfig = this.initialMap();
      const polyline = this.decodePolyline(targetPolyline);

      polyline.setMap(mapConfig);
      this.map = new this.props.google.maps.Map(node, mapConfig);
      this.setState({ loading: false});
    }
  }

  handleChange = (event) => {
    this.setState({newTime: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { userTarget, addNewGoal } = this.props;
    userTarget.athlete_segment_stats.goalTime = parseInt(this.state.newTime);
    addNewGoal(userTarget);
    this.setState({ newTime: 0 });
  }

  render() {
    const {name, athlete_segment_stats } = this.props.userTarget;
    const style = {
      width: '230px',
      height: '200px'
    };

    return (
      <section className='card map-card'>
        <h2 className='title'>Target</h2>
        {this.state.loading && 
          <div>
            <img src={loadingGif}/>
          </div>
        }
        { athlete_segment_stats &&
          <div>
            <h3 className="target-name">{name}</h3>
            <div id="map" className='map' ref='map' style={style}></div>
            <span className='card-data goal'>Goal Time: <span className='nums'>{athlete_segment_stats.goalTime.toFixed(2)} mins</span></span>
            <form className="form card-data"> Update Goal:
            <input
              className="new-goal"
              type="number"
              value={this.state.newTime}
              onChange={this.handleChange}
            />
            <button 
              className="new-segment-button" 
              onClick={this.handleSubmit}
            >
              <i className="fas fa-plus"></i>
            </button>
            </form>
            <span className='card-data stats'>Best Time: <span className='nums'>{(athlete_segment_stats.pr_elapsed_time / 60).toFixed(2)} mins</span></span>
          </div>
        }
      </section>  
    );
  }
}

const mapStateToProps = (state) => ({
  targetMap: state.targetMap,
  userTarget: state.userTarget
});

const mapDispatchToProps = (dispatch) => ({
  addMap: (map) => dispatch(addMap(map)),
  addNewGoal: goal => dispatch(addNewGoal(goal))
});

MapCard.propTypes = {
  userTarget: PropTypes.object.isRequired,
  google: PropTypes.object.isRequired,
  targetMap: PropTypes.array,
  addMap: PropTypes.func.isRequired,
  addNewGoal: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(MapCard);
