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
    return <Navbar collapseOnSelect fluid>
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
            <LinkContainer to="/halal">
              <NavItem eventKey={5}>
                Halal Meat
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
            <NavItem eventKey={7}>
              9455 7962
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>;
  }
}

export default Navigation;
