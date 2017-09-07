import React from 'react';
import { Thumbnail, Col } from 'react-bootstrap'

const products = require("./data.json");
console.log(products);

function SaturdayMarkets(props) {
  if (products.markets) {
    return null;
  }
  return <div>{products.price}</div>;
}

const thumbStyles = {
  flex: "1"
}

const Thumb = ({ animalCut, meatCut, picture, description, price, weight}) => {
  return <Col xs={12} md={4}>
      <Thumbnail src={picture} style={thumbStyles}>
        <h3>{meatCut}</h3>
        <p>$ {price} per kg</p>
        <p>Average package weighs {weight} kg</p>
      </Thumbnail>
    </Col>;
};

export default Thumb