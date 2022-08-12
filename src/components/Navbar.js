import React from 'react';
import '../style/navbar.css';

import { Link } from 'react-router-dom';

const Navbar = () => (
  <>
    <nav className="navbar">
      <ul className="navItem">
        <li><Link to="/">Book</Link></li>
        <li><Link to="catagory">Category</Link></li>
      </ul>
    </nav>
  </>
);

export default Navbar;
