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
    ))}
  </GoogleMap>
));

export default class Contact extends Component {
  state = {
    center: {
      lat: -32.073706,
      lng: 115.897815,
    },
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
          <HomeFlex>
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
    )
  }
}