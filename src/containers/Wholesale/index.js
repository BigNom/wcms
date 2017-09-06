import React, { Component } from 'react';
import { Grid, Row, Col, PageHeader, Panel, Well } from 'react-bootstrap'

import ProductList from './ProductList'

const products = require("./data.json");
console.log(products)

const price = products.price
console.log(price)

const thumbRowStyles = {
  display: "flex",
}

export default class Wholesale extends React.Component{
  render() {
    return <div>
        <Grid>
          <Row bsStyle="row-eq-height">
            <Col xs={12} md={9}>
              <PageHeader>Wholesale Clearance Market</PageHeader>
              <Panel>
                West Coast Meat Solutions are open to the public as part of
                the Wholesale Clearance Sale. The gates open at 6:00am and
                there is a surcharge of $4 for vehicles. The money is
                collected by the Rotary Club of Willetton on entry.
              </Panel>
      
                <ProductList products={products} />
       
            </Col>
            <Col xs={12} md={3}>
              <Well>
                <h4>Wholesale Clearance Market</h4>
                <ul>
                  <li>Open to the Public</li>
                  <li>Saturday: 6:00am - 10:00am</li>
                </ul>
              </Well>
            </Col>
          </Row>
        </Grid>
      </div>;
  }
}
