import React from "react";
import "./Navbar.css";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

export const Navbar = ({ navRef }) => {
  return (
    <nav>
      <div className="desktop-nav" ref={navRef}>
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
          <Link to="/cart" className="cartLogo">
            <FiShoppingCart />
          </Link>

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