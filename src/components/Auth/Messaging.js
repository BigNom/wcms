import React, { Component } from 'react';
import { messaging } from '../../base'

class Messaging extends Component {

  sendNotifcations() {
    messaging
      .requestPermission()
      .then(function() {
        console.log("Have Permission");
      })
      .catch(function(error) {
        console.log("Error Occured.");
      });
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default Messaging;