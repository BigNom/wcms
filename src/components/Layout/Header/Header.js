import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components'

class Header extends Component {
  render() {
    return (
      <nav className="pt-navbar">
        <div className="pt-navbar-group pt-align-left">
          <div className="pt-navbar-heading">Chord</div>
          <input className="pt-input" placeholder="Search..." type="text"/>

        </div>
        <div className="pt-navbar-group pt-align-right">
          <span className="pt-navbar-divider"></span>
          <Link className="pt-button pt-mininal" to="/beef">Beef</Link>
          <Link className="pt-button pt-mininal" to="/lamb">Lamb</Link>
          <Link className="pt-button pt-mininal" to="/contact">Contact</Link>
          <button className="pt-button pt-minimal pt-icon-user"></button>
          <button className="pt-button pt-minimal pt-icon-cog"></button>
        </div>
      </nav>
    );
  }
}

export default Header;