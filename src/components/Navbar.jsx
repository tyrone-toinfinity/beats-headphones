import "./Navbar.css";
import { Twirl as Hamburger } from "hamburger-react";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export const Navbar = ({ navRef }) => {
  const navbarRef = useRef();

  const navigate = useNavigate();
  // Hamburger

  return (
    <nav>
      <div className="navbar" ref={navRef}>
        <Hamburger
          color="#222"
          label="Show menu"
          duration={0.3}
          onToggle={(toggled) => {
            if (toggled) {
              // open a menu
              navbarRef.current.classList.add("navbar__show__Mobile");
            } else {
              // close a menu
              navbarRef.current.classList.remove("navbar__show__Mobile");
            }
          }}
        />

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
