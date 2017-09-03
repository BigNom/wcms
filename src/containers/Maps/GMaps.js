import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => (
  <div style={{
    position: 'relative', color: 'white', background: 'red',
    height: 40, width: 60, top: -20, left: -30,
  }}>
    {text}
  </div>
);

class GMaps extends React.Component {
  static defaultProps = {
    center: {lat: -32.073037, lng: 115.896297},
    zoom: 17
  };

  render() {
    return (
      <div>
        <GoogleMapReact
          style={{ width: "100%", height: "400px" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        />
        <AnyReactComponent
          lat= {-32.073037}
          lng= {115.896297}
          />
      </div>
    )
  }
}

export default GMaps;