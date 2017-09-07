import React, { Component } from "react";
import Thumb from "./Thumb";
import ProductsList from "./ProductsList";

class FilteredList extends React.Component {
  render() {
    return (
      <div>
        <ProductsList products={this.props.products} />
      </div>
    );
  }
}

export default FilteredList;
