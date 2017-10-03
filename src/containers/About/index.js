import React from "react";
import Helmet from "react-helmet";
import { Well, Col, Row } from "react-bootstrap";


export default class About extends React.Component{
  render() {
    return <div className="container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            About West Coast meat Solutions
          </title>
          <link rel="canonical" href="https://wcm.solutions/about" />
          <meta name="description" content="At West Coast Meat Solutions " />
        </Helmet>
        <Row>
          <Col xs={12} md={12}>
            <Well>
              <h1>About West Coast Meat Solutions</h1>
              <p>
              West Coast Meat Solutions supply an extensive range of
              premium meat to supermarkets, butchers, restaurants and food
              distributors all over Perth. Our boning room facility
              processes on average 150 bodies of young and prime beef a
              week. We are one of the only facilities open to the public
              in the state. Our facility uses the latest state of the art
              technology.
            </p>
            </Well>
          </Col>
        </Row>
      </div>;
  }
}
