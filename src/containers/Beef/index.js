import React from 'react';
import Helmet from "react-helmet";
import { Grid, Row, Col, PageHeader, Panel } from "react-bootstrap";

import ProductsList from './ProductsList'

const products = require('./beef/beef.json');

export default class Beef extends React.Component{
  render() {
    return (
    <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            Beef Cuts | Beef Wholesale Products
          </title>
          <link rel="canonical" href="https://wcm.solutions" />
          <meta name="description" content="Beef cuts cost per kg." />
        </Helmet>
        <Grid>
  <Row bsStyle="row-eq-height">
    <Col xs={12} md={12}>
      <PageHeader>Beef Cuts</PageHeader>
      <Panel>
       All of our beef is sourced locally sourced from WA,
      </Panel>
      </Col>
      </Row>
      <Row>
    <Col xs={12} md={12}>
    <ProductsList products={products} />
    </Col>
  </Row>
       </Grid>
    </div>);
  }
}

