import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react'

const API_KEY = 'AIzaSyB-Xxfzj2t44NyJtgnMQaam9-tw7wRxbsw';

const AnyReactComponent = ({ text }) => (
  <div style={{
    position: 'relative', color: 'white', background: 'blue',
    height: 20, width: 20, top: -200, left: 200,
  }}>
    {text}
  </div>
);

class GMaps extends React.Component {
  static defaultProps = {
    center: {lat: -32.073037, lng: 115.896297},
    zoom: 17,
  };

  render() {
    return (
      <div>
        <GoogleMapReact
        bootstrapURLKeys={{
          key: API_KEY,
          language: 'en'
        }}
          style={{ width: "100%", height: "400px", flex: 1 }}
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