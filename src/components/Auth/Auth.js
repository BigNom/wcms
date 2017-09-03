import React, { Component } from 'react';
import { DB_CONFIG } from '../../Config/config'
import firebase from 'firebase/app'

class Auth extends Component {
  constructor(props) {
    super(props)
    
    this.app = firebase.initializeApp(DB_CONFIG);
    this.db = this.app.database().ref().child('notes');
  }
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default Auth;