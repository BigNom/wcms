import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import { Grid } from 'react-bootstrap'

//import TransitionGroup from 'react-transition-group/TransitionGroup';

import { app, base } from './base'

import Routes from './Routes'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/'
//import './App.css'

class App extends Component {
  render() {
    return <Router>
        <div>
          <Grid fluid>
            <Hero />
            <Routes />
            <Footer />
          </Grid>
        </div>
      </Router>;
  }
}

export default App;