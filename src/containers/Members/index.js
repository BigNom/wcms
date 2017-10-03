import React from "react";
import Helmet from "react-helmet";
import { Well, Col, Row } from "react-bootstrap";


export default class Members extends React.Component{
  render() {
    return <div className="container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            About West Coast Meat Solutions Members Area
          </title>
          <meta name="description" content="At West Coast Meat Solutions Members" />
          <link rel="canonical" href="https://wcm.solutions/members" />
        </Helmet>
        <Row>
          <Col xs={12} md={12}>
            <div>
            <h1>Members Area</h1>
            </div>
          </Col>
        </Row>
      </div>;
  }
}
