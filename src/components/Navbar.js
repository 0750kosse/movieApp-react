import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-links">
        <li><NavLink to="/latest" className="nav-links__latest">Latest</NavLink></li>
        <li><Link to="/search" className="nav-links__search">Search</Link></li>
      </ul>
    </nav>
  )
}

export default withRouter(Navbar);