import React from 'react';
import { Thumbnail, Col } from 'react-bootstrap'

const HomeThumb = (Wholesale) => {
  return <Col xs={12} md={4}>
      <Thumbnail>
        <h3>Beef</h3>
        <p>$</p>
        <p>Average package weighs kg</p>
      </Thumbnail>
    </Col>;
};

export default HomeThumb