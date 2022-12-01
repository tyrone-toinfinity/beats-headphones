import "./Navbar.css";
import { Sling } from "hamburger-react";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

export const Navbar = ({ navRef }) => {
  const navbarRef = useRef();
  const showNavbar = () => {
    navbarRef.current.classList.toggle("navbar__show__Mobile");
  };
  const navigate = useNavigate();
  // Hamburger
  const [isOpen, setOpen] = useState(false);
  return (
    <nav>
      <div className="navbar" ref={navRef}>
        <span className="mobileNavHamburger" onClick={showNavbar}>
          {" "}
          <Sling
            toggled={isOpen}
            toggle={setOpen}
            color="#222"
            label="Show menu"
          />
        </span>

        <div>
          <img
            src="./beats-logo.svg"
            alt="logo"
            className="logo"
            onClick={() => navigate("/")}
          />
        </div>
        <ul className="navbar__List">
          <li onClick={() => navigate("/")}>discover</li>
          <li onClick={() => navigate("/shop")}>shop</li>
          <li onClick={() => navigate("/support")}>support</li>
        </ul>
        <div className="shoppingCart" onClick={() => navigate("/cart")}>
          <FiShoppingCart className="cartIcon" />
          <p>{0}</p>
        </div>
      </div>
      {/* Mobile */}
      <ul className="navbar__Mobile" ref={navbarRef}>
        <li onClick={() => navigate("/")}>discover</li>
        <li onClick={() => navigate("/shop")}>shop</li>
        <li onClick={() => navigate("/support")}>support</li>
      </ul>
    </nav>
  );
};
