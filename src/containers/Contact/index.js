import React, { Component } from 'react';
import ContactForm from './ContactForm'
import GMaps from './GMaps'
import { Col, Row, PageHeader, Checkbox, FormGroup, HelpBlock, Radio, ControlLabel, FormControl, Button } from 'react-bootstrap'

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

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
    return <div style={contactStyles}>
        <div className="container">
          <div style={headerStyles} className="row">
            <div className="col">
              <PageHeader>Contact and Location Details</PageHeader>
            </div>
          </div>
          <Row>
            <Col xs={12} md={6}>
              <form>
                <FieldGroup id="formControlsEmail" type="email" label="Email address" placeholder="Enter email" />
                <FormGroup controlId="formControlsTextarea">
                  <ControlLabel>Textarea</ControlLabel>
                  <FormControl componentClass="textarea" placeholder="textarea" />
                </FormGroup>
                <Button bsStyle="primary" bsSize="large" type="submit">
                  Submit
                </Button>
              </form>
            </Col>
            <Col xs={12} md={6}>
              <GMaps />
            </Col>
          </Row>
        </div>
      </div>;
  }
}