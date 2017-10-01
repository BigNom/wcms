import React, { Component } from 'react';
import GMaps from './GMaps'
import { Col, Row, PageHeader, FormGroup, HelpBlock, ControlLabel, FormControl, Button } from 'react-bootstrap'
import Helmet from "react-helmet"
import ContactForm from './ContactForm'

const loginStyles = {
  width: "90%",
  maxWidth: "315px",
  margin: "20px auto",
  border: "1px solid #ddd",
  borderRadius: "5px",
  padding: "10px"
};

const contactStyles = {
  margin: "40px auto"
};

const headerStyles = {
  margin: "20px auto",
  textAlign: "center"
};

export default class Contact extends Component {
  render() {
    return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Contact Us | West Coast Meat Solutions
        </title>
        <link rel="canonical" href="https://wcm.solutions" />
        <meta name="description" content="Contact page with email form, Location map" />
      </Helmet>
      <div style={contactStyles}>
        <div className="container">
          <div style={headerStyles} className="row">
            <div className="col">
              <PageHeader>Contact and Location Details</PageHeader>
            </div>
          </div>
          <Row>
          
            <Col xs={12} md={6}>
            <div>
            <p>We are located at West Wing 4 Market City, 280 Bannister Road, <br />
            Canning Vale WA 6155</p>
            <p>9455 7962</p>
            <a href="sales@wcmsolutions.com.au"><p>sales@wmcsolutions.com.au</p></a>
          </div>
          <br />
          <p>If you would like to make an inquiry please fill out the form below and we will respond to you within 24 hrs</p>
            <ContactForm />
            </Col>
            <Col xs={12} md={6}>
              <GMaps />
            </Col>
          </Row>
        </div>
      </div>
    </div>);
  }
}