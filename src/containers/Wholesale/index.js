import React from 'react';
import { Grid, Row, Col, PageHeader, Panel, Well } from 'react-bootstrap'
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'
import Helmet from "react-helmet";
import FilteredList from './FilteredList'

const products = require("./data.json");

export default class Wholesale extends React.Component{

  render() {
    return <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Wholesale Meat | Perth Wholesale Meat Markets | Wholesale Lamb | Wholesale Beef</title>
          <link rel="canonical" href="https://wcm.solutions/wholesale" />
          <meta name="description" content="Perth Wholesale Meat Market, Wholesale beef, lamb, goat and poultry" />
        </Helmet>
        <Grid>
          <Row bsStyle="row-eq-height">
            <Col xs={12} md={9}>
              <PageHeader>Wholesale Clearance Market</PageHeader>
              <Panel>
                West Coast Meat Solutions are open to the public as part of
                the Wholesale Clearance Sale. The gates open at 6:00am and
                there is a surcharge of $4 for vehicles. The money is
                collected by the Rotary Club of Willetton on entry.
                <br />
                
              </Panel>
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
          <Row>
            <Col xs={12} md={12}>
              <FilteredList products={products} />
            </Col>
          </Row>
        </Grid>
      </div>;
  }
}
