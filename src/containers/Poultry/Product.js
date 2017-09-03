import React from 'react'
import ProductFilter from './ProductFilter'
import './style.css'

const Product = (props) =>
  <li className= "product-item">{props.name}</li>;

export default Product;