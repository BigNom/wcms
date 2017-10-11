import React from 'react'
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'


const Sitemap = () => (
  <div className="container">
    <h1>Sitemap</h1>
      <LinkContainer to="/">
        <NavItem eventKey={1}>Home</NavItem>
      </LinkContainer>
      <LinkContainer to="/beef">
        <NavItem eventKey={1}>Beef</NavItem>
      </LinkContainer>
      <LinkContainer to="/lamb">
        <NavItem eventKey={1}>Lamb</NavItem>
      </LinkContainer>
      <LinkContainer to="/halal">
        <NavItem eventKey={1}>Halal Meat</NavItem>
      </LinkContainer>
      <LinkContainer to="/about">
        <NavItem eventKey={1}>About Us</NavItem>
      </LinkContainer>
      <LinkContainer to="/contact">
        <NavItem eventKey={1}>Contact Us</NavItem>
      </LinkContainer>
  </div>
);

export default Sitemap