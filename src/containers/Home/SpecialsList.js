import React, { Component } from 'react';
import Specials from './Specials'

import {
  CustomFlex,
  HomeFlex,
} from '../../components/Global/Main.js'

const SpecialsList = ({products}) => {
  return (
    <CustomFlex>
      {
        products.map(product => (
          <Specials
          key={product.objectID}
          meatCut={product.meatCut}
          price={product.price}

          />
      ))}
    </CustomFlex>
  )
}

export default SpecialsList