import React, { Component } from "react";
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'
import logoSm from './logoSm.svg'
import './Navigation.css'

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
              <NavItem eventKey={2} href="#">
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
          <Nav pullRight>
            <NavItem eventKey={5} href="#">
              9455 7962
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>;
  }
}

export default Navigation;
