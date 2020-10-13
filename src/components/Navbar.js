import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
  console.log(props)
  return (
    <nav className="nav-container">
      <ul className="nav-links">
        <li><NavLink to="/latest">Latest</NavLink></li>
        <li><Link to="/search">Search</Link></li>
      </ul>
    </nav>
  )
}

export default withRouter(Navbar);