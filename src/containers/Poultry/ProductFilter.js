import React, { Component } from 'react';
import './style.css'

class ProductFilter extends React.Component {
  handleChange(event) {
    this.props.updateSearch(event.target.value);
  }
  render() {
    console.log('filter value', this.props.filter)
    return (
      <input
        type="text"
        placeholder="Find a student"
        className="input-search"
        onChange={this.handleChange.bind(this)}
        value={this.props.searchText}
      />
    )
  }
}

export default ProductFilter