import React, { Component } from 'react';
import Thumb from './Thumb'
let products = [
  {
    id: "1",
    name: "Osso Buco",
    price: "6.99",
    picture: "./images/beef/osso-bucco.png",
    weight: "2"
  },
  {
    id: "2",
    name: "Eyeround",
    price: "8.5",
    picture: "./images/beef/osso-bucco.png",
    weight: "2"
  },
  {
    id: "3",
    name: "SilverSide",
    price: "7.99",
    picture: "./images/beef/osso-bucco.png",
    weight: "2"
  }
];

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
          weight={product.weight}
          picture={product.picture}
          description={product.description}
          />
      ))}
    </div>
  )
}

export default ProductList