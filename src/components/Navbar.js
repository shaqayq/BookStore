import React from 'react';
import '../style/navbar.css';
import { ImUser } from 'react-icons/im';

import { Link } from 'react-router-dom';

const Navbar = () => (
  <>
    <nav className="navbar">
      <h1 className="logo Text-Style-5">
        BookstoreCMS
      </h1>
      <span className="BOOKS Text-Style-3">
        <Link to="/">BOOKS</Link>
      </span>
      <span className="CATEGORIES Text-Style-3">
        <Link to="catagory">CATEGORIES</Link>
      </span>
      <div className="Oval">
        <ImUser />
      </div>

    </nav>
  </>
);

export default Navbar;
