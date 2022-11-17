import React from "react";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to="">
          <img src="./beats-logo.svg" alt="logo" className="logo" />
        </Link>
      </div>
      <ul className="navbar">
        <Link to="">
          <li>discover</li>
        </Link>
        <Link to="">
          <li>shop</li>
        </Link>
        <Link to="">
          <li>support</li>
        </Link>
      </ul>
      <div>
        <FaSearch />
      </div>
    </nav>
  );
};

export default Navbar;
