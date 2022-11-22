import React from "react";
import { Navbar, ShippingBanner, Footer } from "./index";
import "./Cart.css";
import { Link } from "react-router-dom";
import { Shop } from "./Shop";

export const Cart = () => {
  return (
    <section>
      <Navbar />
      <ShippingBanner />
      <div className="cartWrapper">
        <div className="cartContainer">
          <h1 className="cartTitle">Your cart</h1>

          <div className="cartEmptyText">
            Nothing's here yet! Explore our{" "}
            <Link to="/shop" className="cartLink">
              headsphones and earbuds,
            </Link>{" "}
            or our most{" "}
            <Link to="/" className="cartLink">
              popular products
            </Link>
            <Link to="/shop" className="cartProductsBtn">
              <button>shop all products</button>
            </Link>
          </div>
        </div>

        <aside className="cartItems">
          <h2 className="cartSummary">Cart Summary</h2>
          <ul>
            <li>
              {" "}
              <span>subtotal</span>
              <span>$0.00</span>
            </li>
            <li>
              <span>taxes</span>
              <span>--</span>
            </li>
            <li>
              <span>shipping</span>
              <span>--</span>
            </li>
            <li>
              <span>total</span>
              <span>$0.00</span>
            </li>
          </ul>
          <p>
            Shipping and taxes are calculated at checkout after confirming your
            address.
          </p>
          <button disabled="disabled" className="btnCheckout">
            CHECKOUT
          </button>
          <div className="checkoutLogosContainer">
            <figure>
              {" "}
              <img
                src="./assets/logos/shippingTimer.svg"
                alt=""
                className="checkoutLogos"
              />
              <figcaption>2-hr delivery in most metros ($9)</figcaption>
            </figure>

            <figure>
              {" "}
              <img
                src="./assets/logos/shippingTruck.svg"
                alt=""
                className="checkoutLogos"
              />
              <figcaption>Free Shipping</figcaption>
            </figure>
          </div>
        </aside>
      </div>
      <Footer />
    </section>
  );
};
