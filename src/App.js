import React, { Component } from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom'

import { Grid } from 'react-bootstrap'

import Routes from './Routes'
import Hero from './components/Hero/'
import Footer from './components/Footer/'
//import './App.css'

class App extends Component {
  render() {
    return <Router>
        <div className="app-style">
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