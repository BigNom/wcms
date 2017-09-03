import React, { Component } from 'react';
import { Route } from "react-router-dom";

import Home from "./components/home"
import Other from "./components/other";


function App(Router) {
  return function({ location }) {
    return (
      <Router location={location} context={{}}>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/other" component={Other} />
        </div>
      </Router>
    )
  }
}


export default App;