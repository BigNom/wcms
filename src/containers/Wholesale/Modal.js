import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Product from './Product'

// The Roster component matches one of two different routes
// depending on the full pathname
const Roster = () => (
  <Switch>
    <Route path='/product/:id' component={Product}/>
  </Switch>
)


export default Roster
