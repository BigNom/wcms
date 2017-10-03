import React from "react";
import Helmet from "react-helmet";
import { Well, Col, Row, Media } from "react-bootstrap";

import halal from '../Home/halal.jpg'

export default class Halal extends React.Component{
  render() {
    return <div className="container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            Halal Meat, Perth | Halal Certified Meat Perth| Genuine Halal Meat,
            Perth | 
          </title>
          <link rel="canonical" href="https://wcm.solutions/halal" />
          <meta name="description" content="Looking for genuine halal certified meat. At West Coast Meat Solutions we are committed to supplying high quality halal food. " />
        </Helmet>
        <Row>
          <Col xs={12} md={9}>
            <Well>
              <h1>Halal Certified</h1>
              <p>
                West Coast Meat Solutions is certified by the Western
                Australian Halal Authority (WAHA). We are committed to
                providing customers with truly genuine Halal meat at the
                lowest prices in Perth. We respect that food is an important 
                part of life and the special significance it carries to ones religious beliefs.
              </p>
            </Well>
          </Col>
          <Col xs={3} md={3}>
          <Well>
              <Media.List>
                <Media.ListItem>
                  <Media>
               
                    <Media.Left>
                      <img width={64} height={64} src={halal} alt="halal certification logo" />
                      <a href="https://www.haccp.com.au/" />
                    </Media.Left>

                  </Media>
                </Media.ListItem>
              </Media.List>
            </Well>
          </Col>
        </Row>
      </div>;
  }
}
