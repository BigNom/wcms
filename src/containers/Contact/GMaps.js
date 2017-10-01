import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react'
import logo from '../../assets/mapLogo.png'

const API_KEY = 'AIzaSyB-Xxfzj2t44NyJtgnMQaam9-tw7wRxbsw';

const LogoComponent = ({ text, picture }) => (
  <div style={{
    position: 'relative', 
    color: 'white', 
    borderRadius: 40,
    textAlign: 'center',
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    padding: '4',
    height: 20, 
    width: 20, 
    top: -200, 
    left: 200,
  }}>
    <img src={picture} />
  </div>
);

class GMaps extends React.Component {
  static defaultProps = {
    center: {lat: -32.073820, lng: 115.898600},
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
        <LogoComponent
        text={'WCMS'}
        picture={logo}
          lat= {-32.073820}
          lng= {115.898600}
          />
      </div>
    )
  }
}

export default GMaps;