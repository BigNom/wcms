import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../Auth/Login'

import logo from './logo.svg'

export default () => (
  <nav className="Nav mb3">
    <Link to="/" className="Logo">
      <img src={ logo } alt="west coast meat solutions logo" />
    </Link>
    <a className="NavLink" href="beef">Beef</a>
    <a className="NavLink" href="lamb">Lamb</a>
  </nav>
)