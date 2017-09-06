import React from 'react';
import { Thumbnail, Col } from 'react-bootstrap'

const thumbStyles = {
  flex: "1"
}

const Thumb = ({ animalCut, meatCut, picture, description, price}) => {
  return <Col xs={12} md={4}>
      <Thumbnail src={picture} style={thumbStyles}>
        <h3>{meatCut}</h3>
        <p>{price}</p>
      </Thumbnail>
    </Col>;
};

export default Thumb