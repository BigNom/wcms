import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {
  Col,  Nav, Navbar, NavItem, NavDropdown, MenuItem,
  Grid,
  Row
} from "react-bootstrap";

import { Embed } from "rebass";

import { LinkContainer } from "react-router-bootstrap";
import logoSm from "./logoSm.svg";

const linkStyles = {
  color: "#6d6d6d"
};

const footerStyles = {
  backgroundColor: "rgb(0, 50, 99)",
  padding: "20px 20px 0 20px",
  color: "#fff"
}

const sitemapStyles = {
  display: "inline"
}

function handleSelect(selectedKey) {

}


export default class Footer extends Component {
  render() {
    return <div style={footerStyles}>
        <Grid fluid>
          <Row>
            <Col xs={12} md={3}>
              <Nav bsStyle="pills" stacked activeKey={1} onSelect={handleSelect}>
                <LinkContainer exact={true} to="/">
                  <img src={logoSm} alt="west coast meat solutions logo" />
                </LinkContainer>

                <LinkContainer to="/wholesale">
                  <NavItem eventKey={1}>Wholesale Market</NavItem>
                </LinkContainer>
                <LinkContainer to="/beef">
                  <NavItem style={linkStyles} eventKey={2} href="#">
                    Beef
                  </NavItem>
                </LinkContainer>
                <LinkContainer to="/lamb">
                  <NavItem eventKey={3} href="#">
                    Lamb
                  </NavItem>
                </LinkContainer>
                <LinkContainer to="/contact">
                  <NavItem eventKey={4} href="#">
                    Contact Us
                  </NavItem>
                </LinkContainer>
              </Nav>
            </Col>
            <Col xs={12} md={3}>
              {" "}
              Social Links
            </Col>
            <Col xs={12} md={3}>
              <Embed>
                <iframe width="350" height="300" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJhdlWnH69MioRxgsAmZr370w&key=AIzaSyBuiiGlV57y-miH70QureBPQofKDE1WxHU" />
              </Embed>
            </Col>
            <Col xs={12} md={3}>
              <address>
                <strong>West Coast Meat Solutions</strong>
                <br />
                West Wing 4 Market City,<br />
                280 Bannister Road,<br />
                Canning Vale WA 6155<br />
                <abbr title="Phone" /> 9455 7962
              </address>
            </Col>
          </Row>
          <Row>
            <Col xs={6} xsOffset={5} bsStyle="text-center">
              <Nav style={sitemapStyles} bsStyle="pills">
                <LinkContainer to="/sitemap">
                  <NavItem eventKey={4} href="#">
                    Sitemap
                  </NavItem>
                </LinkContainer>
                <LinkContainer to="/privacy">
                  <NavItem eventKey={4} href="#">
                    Privacy Policy
                  </NavItem>
                </LinkContainer>
              </Nav>
            </Col>
          </Row>

          <footer className="footer text-center">
            <div className="container">
              <p className="footer-text">
                Copyright 2017 BookShop. Reserved Rights
              </p>
            </div>
          </footer>
        </Grid>
      </div>;
    };
}


