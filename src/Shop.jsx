import React from "react";
import { Navbar, ShippingBanner } from "./index";
import "./Shop.css";

export const Shop = () => {
  return (
    <div>
      <Navbar />

      <ShippingBanner />
      <div className="headphonesFilter">
        <div className="headphones">
          {" "}
          <img
            src="./assets/logos/earbudLogo.svg"
            alt=""
            className="earbudIcon"
          />
          <p>Earbuds</p>
        </div>
        <div className="headphones" onClick={() => console.log("you did it")}>
          <img
            src="./assets/logos/headphoneLogo.svg"
            alt=""
            className="earbudIcon"
          />
          <p>Headphones</p>
        </div>
      </div>

      <h1 className="shopTitle">WIRELESS EARBUDS</h1>
      <h1 className="shopTitle">WIRELESS HEADPHONES</h1>
    </div>
  );
};

export default Shop;
