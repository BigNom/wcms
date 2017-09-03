import React, { Component } from 'react';
import {
  Box
} from 'rebass';
import styled from 'styled-components'

//import GMaps from './GMaps'
import Footer from '../../components/Footer/'
import Hero from '../../components/Hero/Hero'
//import './style.css'

import {
  CustomFlex,
  HomeFlex,
  Main
} from '../../components/Global/Main.js'

import {
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from 'react-google-maps'

import ContactForm from './ContactForm'

const GOOGLE_MAP = "https://maps.googleapis.com/maps/api/js?key=AIzaSyB-Xxfzj2t44NyJtgnMQaam9-tw7wRxbsw";

const google = window.google;

const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={15}
    center={props.center}
  >
    {props.markers.map((marker, index) => (
      <Marker
        key={index}
        position={marker.position}
        onClick={() => props.onMarkerClick(marker)}
      >
        {marker.showInfo && (
          <InfoWindow onCloseClick={() => props.onMarkerClose(marker)}>
            <div>{marker.infoContent}</div>
          </InfoWindow>
        )}
      </Marker>
    ))}
  </GoogleMap>
));

export default class Contact extends Component {
  state = {
    center: {
      lat: -32.073706,
      lng: 115.897815,
    },
    markers: [
      {
        position: new google.map.LatLng(-32.073706, 115.897815),
        showInfo: false,
        infoContent: (
          <svg
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <path
              d="M3.5 0c-1.7 0-3 1.6-3 3.5 0 1.7 1 3 2.3 3.4l-.5 8c0
              .6.4 1 1 1h.5c.5 0 1-.4 1-1L4 7C5.5 6.4 6.5 5 6.5
              3.4c0-2-1.3-3.5-3-3.5zm10 0l-.8 5h-.6l-.3-5h-.4L11
              5H10l-.8-5H9v6.5c0 .3.2.5.5.5h1.3l-.5 8c0 .6.4 1 1 1h.4c.6 0
              1-.4 1-1l-.5-8h1.3c.3 0 .5-.2.5-.5V0h-.4z"
            />
          </svg>
        ),
      },

    ],
    fields: {}
  };

  handleMarkerClick = this.handleMarkerClick.bind(this);
  handleMarkerClose = this.handleMarkerClose.bind(this);

  handleMarkerClick(targetMarker) {
  }
  handleMarkerClose(targetMarker) {

  }
  onSubmit = (fields) => {
    console.log('App components: ', fields);
    this.setState({ fields });
  };

  render() {
    return (

        <div>

          <HomeFlex>
            <Box width={1}><Hero /></Box>
            <CustomFlex>
            <ContactForm onSubmit={fields => this.onSubmit(fields)}/>
              <GettingStartedGoogleMap
                containerElement={
                  <div style={{
                    height: 400,
                    width: 600
                  }} />
                }
                mapElement={
                  <div style={{ height: `100%` }} />
                }
                center={this.state.center}
                markers={this.state.markers}
                onMarkerClick={this.handleMarkerClick}
                onMarkerClose={this.handleMarkerClose}
              />
              
            </CustomFlex>
            <Box width={1}><Footer /></Box>
          </HomeFlex>
        </div>

    )
  }
}