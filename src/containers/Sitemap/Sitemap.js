import React from 'react'
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'


const Sitemap = () => (
  <div>
    <h1>Pages</h1>
    <Navbar>
      <LinkContainer to="/">
        <NavItem eventKey={1}>Home</NavItem>
      </LinkContainer>
      <LinkContainer to="/beef">
        <NavItem eventKey={1}>Beef</NavItem>
      </LinkContainer>
      <LinkContainer to="/lamb">
        <NavItem eventKey={1}>Lamb</NavItem>
      </LinkContainer>
      <LinkContainer to="/contact">
        <NavItem eventKey={1}>Contact Us</NavItem>
      </LinkContainer>
    </Navbar>
  </div>
);

export default Sitemap