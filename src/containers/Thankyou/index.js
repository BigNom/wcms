import React from "react";
import Helmet from "react-helmet";
import { Well, Col, Row } from "react-bootstrap";


export default class Thankyou extends React.Component{
  render() {
    return <div className="container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            Thankyou Page
          </title>
          <meta name="description" content="Thankyou page West Coast Meat Solutions " />
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
