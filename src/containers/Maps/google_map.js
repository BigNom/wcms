import React, { Component } from 'react';

// you need to explicitly read any global variables from window. Put this at the top of the file and it will work:
const google = window.google;

class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: -32.073706,
        lng: 115.897815,
        
      }
    });
  }
  render() {
    return <div ref="map" />;
  }
}

export default GoogleMap;