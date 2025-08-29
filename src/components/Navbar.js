import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Optional styling

function Navbar() {
  return (
    <nav>
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}

export default Navbar;
