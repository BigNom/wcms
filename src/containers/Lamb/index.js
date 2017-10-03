import React from 'react';
import { Grid, Row, Col, PageHeader, Panel } from "react-bootstrap";
import Helmet from "react-helmet";

import ProductList from './ProductList'

const products = require('./lamb/lamb.json');

export default class Lamb extends React.Component{
  render() {
    return (
    
    <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Lamb Cuts | Lamb Wholesale Products</title>
          <meta name="description" content="WA Lamb || Whole Lamb || Lamb Chops || Lamb cutlets." />
          <link rel="canonical" href="https://wcm.solutions/lamb" />
        </Helmet>
        <Grid>
        <Row bsStyle="row-eq-height">
    <Col xs={12} md={12}>
      <PageHeader>Lamb Cuts</PageHeader>
      <Panel>
       Locally sourced from WA
      </Panel>
      </Col>
      </Row>
      <Row>
    <Col xs={12} md={12}>
    <ProductList products={products} />
    </Col>
  </Row>
       </Grid>
    </div>);
  }
}
