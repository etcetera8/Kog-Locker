import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class MapCard extends Component {

  componentDidUpdate() {
    this.loadMap();
  }

  loadMap() {
    console.log(this.props);
    if (this.props && this.props.google) {
      const {google} = this.props;
      const maps = google.maps;
    console.log("map car", this);

    const mapRef = this.refs.map;
    const node = ReactDOM.findDOMNode(mapRef);

    const mapConfig = Object.assign({}, {
      center: {lat: 39.7392, lng: -104.9903},
      zoom: 11,
      mapTypeId: 'terrain'
    })

    this.map = new maps.Map(node, mapConfig)

    }
  }

  render() {
    console.log(this.loadMap)
    console.log(this.props);
    const style = {
      width: '200px',
      height: '200px',
    }

    return (
   
        <section className='map card' ref='map' style={style}>
        </section>
      
    )
  }
};

