import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Search Books</Link></li>
        <li><Link to="/bookshelf">My Bookshelf</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
