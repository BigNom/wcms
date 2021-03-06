import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

export const GettingStartedGoogleMap = withGoogleMap (props => (
    <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={3}
    defaultCenter={{ lat: -25.363882, lng: 131.044922}}
    onClick={props.onMapClick}
    >
    {props.markers.map((marker, index => 
    <Marker
    {...marker}
    onRightClick={() => props.onMarkerRightClick(index) }
    />
    ))}
    </GoogleMap>
));

render(
    <GettingStartedGoogleMap
    containerElement={
        <Div style={{ height: `100%` }} />
    }
    mapElement={
        <div style={{ height: `100%`}} />
    }
    onMapLoad={_.noop}
    onMapClick={_.noop}
    markers={markers}
    onMarkerRightClick={_.noop}
    />,
)
