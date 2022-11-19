import React from "react";
import "./Navbar.css";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="desktop-nav">
        <div>
          <Link to="/">
            <img src="./beats-logo.svg" alt="logo" className="logo" />
          </Link>
        </div>
        <ul className="navbar">
          <Link to="">
            <li>discover</li>
          </Link>
          <Link to="/shop">
            <li>shop</li>
          </Link>
          <Link to="">
            <li>support</li>
          </Link>
        </ul>
        <div className="shoppingCart">
          <FaShoppingCart />
          <p>{0}</p>
        </div>
      </div>

      <div className="mobile-nav">
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
      </div>
    </nav>
  );
};

export default Navbar;
