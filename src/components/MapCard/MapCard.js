import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';

import { addMap } from '../../actions/actionIndex';
import './MapCard.css'

class MapCard extends Component {

  async componentDidUpdate() {
    if (!this.props.targetMap) {
      await this.loadMap(this.props.userTarget.polyline, this.props.userTarget.end_latlng);
    }
  }

  async loadMap (targetPolyline, latLong) {
    if (this.props.userTarget && this.props.google.maps.geometry.encoding && latLong) {
      const lat = latLong[0]
      const lng = latLong[1]
      const { google } = this.props;
      const maps = google.maps;
      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

    const mapConfig = new google.maps.Map(node, {
      zoom: 12,
      center: {lat, lng},
      mapTypeId: 'terrain'
    })

    const decodedSets = google.maps.geometry.encoding.decodePath(targetPolyline)
    const array = decodedSets.map(coord => JSON.stringify(coord))

    const parsedArray = array.map(coord => JSON.parse(coord))
      
    const polyline = new google.maps.Polyline({
      path: parsedArray,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0
    })
    polyline.setPath(decodedSets)
    polyline.setMap(mapConfig)
    this.map = new maps.Map(node, mapConfig)
    this.props.addMap(this.map)
    console.log(this.props);
    }
  }

  render() {
    const {name, athlete_segment_stats} = this.props.userTarget
    console.log(this.props)
    const style = {
      width: '200px',
      height: '200px',
    }

    return (
      <section className='card map-card'>
        {
          athlete_segment_stats && 
          <div>
            <h3 className="target-name">{name}</h3>
          
            <div id="map" className='map' ref='map' style={style}>
            </div>
            <span>Best Time: {(athlete_segment_stats.pr_elapsed_time / 60)} minutes</span>
          </div>
        }
      </section>  
    )
  }
};

const mapStateToProps = (state) => ({
  targetMap: state.targetMap
})

const mapDispatchToProps = (dispatch) => ({
  addMap: (map) => dispatch(addMap(map))
})

export default connect(mapStateToProps, mapDispatchToProps)(MapCard)
