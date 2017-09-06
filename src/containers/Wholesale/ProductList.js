import React, { Component } from 'react';
import Thumb from './Thumb'

import {
  CustomFlex,
  HomeFlex,
} from '../../components/Global/Main.js'

const ProductList = ({products}) => {
  return (
    <div>
      {
        products.map(product => (
          <Thumb
          key={product.objectID}
          meatCut={product.meatCut}
          animalCut={product.animalCut}
          price={product.price}
          picture={product.picture}
          description={product.description}
          />
      ))}
    </div>
  )
}

export default ProductList