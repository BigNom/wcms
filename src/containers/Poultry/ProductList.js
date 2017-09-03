import React, { Component } from 'react';
import Product from './Product';
import ProductFilter from './ProductFilter';
import './style.css'


class ProductList extends React.Component {
  filter(products) {
    if (!this.props.filter) {
      return products
    }
    return products.filter((product) => product.toLowerCase().indexOf(this.props.filter.toLowerCase()) >= 0)
  }
  render() {
    return (
      <ul className="product-list">
        {this.filter(this.props.products)
          .map((product) => <Product name={product}></Product>)}
      </ul>
    )
  }
};
export default ProductList