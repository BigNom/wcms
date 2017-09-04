import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Helmet from "react-helmet"

//import TransitionGroup from 'react-transition-group/TransitionGroup';

import { Spinner } from '@blueprintjs/core'
import { app, base } from './base'

import Home from './containers/Home/';
import Beef from './containers/Beef/';
import Lamb from './containers/Lamb/';
import Poultry from './containers/Poultry'
import Contact from './containers/Contact/';
import Hero from './components/Hero/Hero'
//import './App.css'

class App extends Component {
  render() {
    return <Router>
        <div>
          <Helmet>
            <meta charSet="utf-8" />
            <title>
              Wholesale Meat, Perth | Canning Vale Meat Markets | Cheap
              Meat, Perth | Quality Meat, Perth | Halal Certified | MSA
              Certified
            </title>
            <link rel="canonical" href="https://wcm.solutions" />
            <meta name="description" content="Looking for wholesale price restaurant quality meat. At West Coast Meat Solutions we are committed to providing affordable meat to Perth families. We are Halal and MSA Certified. Open Saturday Morning to the public" />
          </Helmet>
          <Hero />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/beef" component={Beef} />
            <Route path="/lamb" component={Lamb} />
            <Route path="/poultry" component={Poultry} />
            <Route path="/contact" component={Contact} />
            <Route render={function() {
                return <p>Not Found</p>;
              }} />
          </Switch>
        </div>
      </Router>;
  }
}

export default App;