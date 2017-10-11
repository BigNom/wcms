import React from 'react'
import Header from './Header'
import Main from './Main'

export default class SimpleRouter extends React.Component{
  render() {
    return(
      <div>
      <h1>Simple Router Page</h1>
      <Header />
      <Main />
    </div>
  
    )
  }
}

