import React, { Component } from 'react'
import data from './data'
import Page from './Page'

export default class Filterlist extends React.Component {
  render() {
    return(
      <Page data={data} />
    )
  }
}