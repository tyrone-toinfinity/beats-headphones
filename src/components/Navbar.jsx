import React from "react";
import "./Navbar.css";
import { FaSearch, FaShoppingCart, FaBars } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { useRef } from "react";

export const Navbar = ({ navRef }) => {
  const navbarRef = useRef();
  const showNavbar = () => {
    navbarRef.current.classList.toggle();
  };

  return (
    <nav>
      <div className="desktop-nav" ref={navRef}>
        <div>
          <Link to="/">
            <img src="./beats-logo.svg" alt="logo" className="logo" />
          </Link>
        </div>
        <ul className="navbar">
          <Link to="/">
            <li>discover</li>
          </Link>
          <Link to="/shop">
            <li>shop</li>
          </Link>
          <Link to="/support">
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
      <div className="mobileWrapper">
        <div className="mobile-nav">
          <FaBars className="mobileNavHamburger" onClick={showNavbar} />
          <div>
            <Link to="/">
              <img src="./beats-logo.svg" alt="logo" className="logo" />
            </Link>
          </div>
          <div>
            <div className="shoppingCart">
              <Link to="/cart" className="cartLogo">
                <FiShoppingCart />
              </Link>
              <p>{0}</p>
            </div>
          </div>
        </div>
        <ul className="navbar__Mobile">
          <button>
            {" "}
            <VscClose className="mobileNavClose" />
          </button>
          <Link to="/">
            <li>discover</li>
          </Link>
          <Link to="/shop">
            <li>shop</li>
          </Link>
          <Link to="/support">
            <li>support</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};
