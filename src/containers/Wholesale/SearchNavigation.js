import React, { Component } from "react";
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'

class SearchNavigation extends Component {
  render() {
    return <Navbar>
        <Navbar.Header>
          <Navbar.Toggle />
        </Navbar.Header>
      </Navbar>;
  }
}

export default SearchNavigation;
