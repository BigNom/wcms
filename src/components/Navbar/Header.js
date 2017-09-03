import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Popover, PopoverInteractionKind, Position } from "@blueprintjs/core";

import './Header.css'

export default class Header extends Component {
  render() {
    return (
      <nav className="pt-navbar header-styles">
      <div className="pt-navbar-group pt-align-left">
        <div className="pt-navbar-heading">WCMS</div>
        {this.props.authenticated
          ? <input className="pt-input" placeholder="Search Songs..." type="text" />
          : null
        }
      </div>
      {
        this.props.authenticated
          ? (
            <div className="pt-navbar-group pt-align-right">
              <Link className="pt-button pt-minimal pt-icon-music" to="/user">User</Link>
                <span className="pt-navbar-divider"></span>
                <button className="pt-button pt-minimal pt-icon-user"></button>
                <button className="pt-button pt-minimal pt-icon-cog"></button>
                <Link className="pt-button pt-minimal pt-icon-log-out" to="/logout" aria-label="Log Out"></Link>
              </div>
            )
            : (
              <div className="pt-navbar-group pt-align-right">
                <Link className="pt-button pt-intent-primary" to="/login">Log In</Link>
              </div>
            )
        }
      </nav>
    );
  }
}

// Logout component doesn't render anything so we need to add aria-label so screen readers can see this


        