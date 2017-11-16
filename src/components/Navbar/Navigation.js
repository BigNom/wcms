import React, { Component } from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'
import logoSm from './logoSm.svg'
import './Navigation.css'

const linkStyles = {
  color: "white",
  textAlign: "center"
}

class Navigation extends Component {
  render() {
    return <Navbar collapseOnSelect fluid className="navbar-inverse">
        <Navbar.Header>
          <LinkContainer exact={true} to="/">
            <img src={logoSm} alt="west coast meat solutions logo" />
          </LinkContainer>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/wholesale">
              <NavItem eventKey={1}>Wholesale Market</NavItem>
            </LinkContainer>
            <LinkContainer to="/beef">
              <NavItem style={linkStyles} eventKey={2}>
                Beef
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/lamb">
              <NavItem eventKey={3}>
                Lamb
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/about">
              <NavItem eventKey={4}>
                About Us
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/contact">
              <NavItem eventKey={6}>
                Contact Us
              </NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            <a href="tel:+08-9455-7962" className="phone-number">
              9455 7962
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>;
  }
}

export default Navigation;
