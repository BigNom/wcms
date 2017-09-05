import React, { Component } from 'react';
import Card from './Card'

import {
  CustomFlex,
  HomeFlex,
} from '../../components/Global/Main.js'

const ProductList = ({products}) => {
  return (
    <CustomFlex>
      {
        products.map(product => (
          <Card 
          key={product.objectID}
          meatCut={product.meatCut}
          animalCut={product.animalCut}
          price={product.price}
          picture={product.picture}
          description={product.description}
          />
      ))}
    </CustomFlex>
  )
}

export default ProductList