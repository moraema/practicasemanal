import React from 'react';
import { Link } from 'react-router-dom';
import "./nav.css";

function Navbar() {
  return (
    <nav>
      <div className="nav-shop">
        <span>Shop</span>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/admin">Admin</Link>
        </li>
        <li>
          <Link to="/">Cliente</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
