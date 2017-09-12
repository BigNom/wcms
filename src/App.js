import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import { Grid } from 'react-bootstrap'

//import TransitionGroup from 'react-transition-group/TransitionGroup';

import { app, base } from './base'

import Home from './containers/Home/';
import Wholesale from './containers/Wholesale/'
import Beef from './containers/Beef/';
import Lamb from './containers/Lamb/';
import Poultry from './containers/Poultry'
import Contact from './containers/Contact/';
import Sitemap from './containers/Sitemap/Sitemap';
import Privacy from './containers/Sitemap/Privacy'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/'
//import './App.css'

class App extends Component {
  render() {
    return <Router>
        <div>

          <Grid fluid>
            <Hero />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/wholesale" component={Wholesale} />
              <Route path="/beef" component={Beef} />
              <Route path="/lamb" component={Lamb} />
              <Route path="/poultry" component={Poultry} />
              <Route path="/contact" component={Contact} />
              <Route path="/sitemap" component={Sitemap} />
              <Route path="/privacy" component={Privacy} />
              <Route render={function() {
                  return <p>Not Found</p>;
                }} />
            </Switch>
            <Footer />
          </Grid>
        </div>
      </Router>;
  }
}

export default App;