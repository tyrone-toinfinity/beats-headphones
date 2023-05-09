import { useState, useRef } from "react";
import { ShippingBanner } from "./index";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { useParams } from "react-router-dom";

import "./Shop.css";

import products from "./products.json";

export const Shop = () => {
  const [color, setColor] = useState("Black");
  const [colorSolos, setColorSolos] = useState("Matte Black");
  const [colorStudio, setColorStudio] = useState("White");
  const [earbudsHeroProduct, setEarbudsHeroProduct] = useState(
    <img
      src="assets/product-img/beats04.1.jpeg"
      alt=""
      className="earbudsHero"
    />
  );

  const [headphonesHeroProduct, setHeadphonesHeroProduct] = useState(
    <img
      src="assets/product-img/beats17.1.jpeg"
      alt=""
      className="earbudsHero"
    />
  );
  const [heroProductStudio, setHeroProductStudio] = useState(
    <img
      src="assets/product-img/beats05.1.jpeg"
      alt=""
      className="earbudsHero"
    />
  );
  const headphones = useRef();

  function handleClickHeadphones() {
    headphones.current.scrollIntoView({ behavior: "smooth" });
  }

  const earbuds = useRef();

  function handleClickEarbuds() {
    earbuds.current.scrollIntoView({ behavior: "smooth" });
  }

  const { urlName } = useParams();

  // find the product in the JSON data using the urlName
  // const product = headphones.find((p) => p.urlName === urlName);

  return (
    <div>
      <ShippingBanner />

      <div className="headphonesFilter">
        <div className="headphones">
          {" "}
          <img
            src="./assets/logos/earbudLogo.svg"
            alt=""
            className="earbudIcon"
            onClick={handleClickEarbuds}
          />
          <p onClick={handleClickEarbuds}>Earbuds</p>
        </div>

        <div className="headphones">
          <img
            src="./assets/logos/headphoneLogo.svg"
            alt=""
            className="earbudIcon"
            onClick={handleClickHeadphones}
          />
          <p onClick={handleClickHeadphones}>Headphones</p>
        </div>
      </div>
      <h1 className="shopTitle" ref={earbuds}>
        WIRELESS EARBUDS
      </h1>
      <div className="earbudsWrapper">
        {earbudsHeroProduct}
        <div className="earBudsTextContainer">
          <h5 className="newColors">new colors</h5>
          <h3 className="earBudsHeroTitle">Beats Fit Pro</h3>
          <h4 className="earBudsHeroPrice">$199.99</h4>
          <ul className="earBudsFeatures">
            <li>Flexible, secure-fit wingtips</li>
            <li>Active Noise Cancelling (ANC) and Transparency mode</li>
            <li>Up to 6 hours of listening time with ANC on</li>
            <li>Auto Play/Pause connection via Apple H1 chip</li>
          </ul>
          <div className="earBudsColors">
            <h6>
              {products.headpones.filter(
                (products) => products.urlName === "beats-fit-pro"
              ).length + " "}
              Colors
            </h6>
            <div>
              {products.headpones
                .filter((product) => product.urlName === "beats-fit-pro")
                .map((product) => (
                  <span
                    key={product.id}
                    className="dots"
                    onClick={() => {
                      setEarbudsHeroProduct(
                        <img src={product.image[0]} className="earbudsHero" />
                      );
                      setColor(
                        product.color.charAt(0).toUpperCase() +
                          product.color.slice(1)
                      );
                    }}
                  ></span>
                ))}
            </div>
          </div>

          <div className="currentColor">
            <span>{color}</span>

            <span>
              <button className="button-28">View Details</button>
            </span>
          </div>
        </div>
      </div>
      {/* Poster */}
      <div className="posterEarbuds">
        <h1 className="posterEarbudsHeader">beats ˣ kim</h1>
        <h3 className="posterEarbudsHeader2">Special Edition Beats Fit Pro</h3>
        <button className="posterEarbudsBtn">shop</button>
      </div>

      <Card style={{ width: "20rem" }} className="posterCardEarbuds">
        <Card.Img
          variant="top"
          src="./assets/product-img/earbudsPosterMobile.jpeg"
          className="posterCardImg"
        />
        <Card.Body className="posterCardBody">
          <Card.Title className="posterEarbudsHeader">beats ˣ kim</Card.Title>
          <Card.Text className="posterEarbudsHeader2">
            Special Edition Beats Fit Pro
          </Card.Text>
          <Button variant="" className="posterEarbudsBtn">
            Shop
          </Button>
        </Card.Body>
      </Card>

      <h1 className="shopTitle" ref={headphones}>
        WIRELESS HEADPHONES
      </h1>
      {/* Solo */}
      <div className="headphonesWrapper">
        {headphonesHeroProduct}
        <div className="earBudsTextContainer">
          <h3 className="earBudsHeroTitle">
            Beats Solo³ <br />
            Wireless
          </h3>
          <h4 className="earBudsHeroPrice">$199.99</h4>
          <ul className="earBudsFeatures">
            <li>Adjustable fit with comfort-cushioned ear cups</li>

            <li>
              Fine-tuned acoustics for clarity and depth with noise isolation
            </li>

            <li>Up to 40 hours of listening time</li>

            <li>Apple W1 chip & Class 1 Wireless Bluetooth®</li>
          </ul>
          <div className="earBudsColors">
            {" "}
            <h6>3 Colors</h6>{" "}
            <div>
              <span
                className="dotsSolo"
                onClick={() => {
                  setHeadphonesHeroProduct(
                    <img
                      src="assets/product-img/beats17.1.jpeg"
                      alt="solo headpones"
                      className="earbudsHero"
                    />
                  );
                  setColorSolos("Matte Black");
                }}
              ></span>
              <span
                className="dotsSolo"
                onClick={() => {
                  setHeadphonesHeroProduct(
                    <img
                      src="assets/product-img/beats16.1.jpeg"
                      alt="solo headpones"
                      className="earbudsHero"
                    />
                  );
                  setColorSolos("Rose Gold");
                }}
              ></span>
              <span
                className="dotsSolo"
                onClick={() => {
                  setHeadphonesHeroProduct(
                    <img
                      src="assets/product-img/beats18.1.jpeg"
                      alt="solo headpones"
                      className="earbudsHero"
                    />
                  );
                  setColorSolos("Citrus Red");
                }}
              ></span>
            </div>
          </div>
          <div className="currentColor">
            <span>{colorSolos}</span>
            <span>
              <button className="button-28">View Details</button>
            </span>
          </div>
        </div>
      </div>
      {/*Studio */}
      <div className="headphonesWrapper">
        {heroProductStudio}
        <div className="earBudsTextContainer">
          <h3 className="earBudsHeroTitle">
            Beats Studio³ <br />
            Wireless
          </h3>
          <h4 className="earBudsHeroPrice">$349.95</h4>
          <ul className="earBudsFeatures">
            <li>Ergonomic ear cups with on-ear controls</li>

            <li>Active Noise Cancelling (ANC)</li>

            <li>Up to 22 hours of listening time</li>

            <li>Apple W1 chip & Class 1 Wireless Bluetooth®</li>
          </ul>
          <div className="earBudsColors">
            {" "}
            <h6>3 Colors</h6>{" "}
            <div>
              <span
                className="dotsStudio"
                onClick={() => {
                  setHeroProductStudio(
                    <img
                      src="assets/product-img/beats05.1.jpeg"
                      alt="studio headphones"
                      className="earbudsHero"
                    />
                  );
                  setColorStudio("White");
                }}
              ></span>
              <span
                className="dotsStudio"
                onClick={() => {
                  setHeroProductStudio(
                    <img
                      src="assets/product-img/beats06.1.jpeg"
                      alt="studio headphones"
                      className="earbudsHero"
                    />
                  );
                  setColorStudio("Blue");
                }}
              ></span>
              <span
                className="dotsStudio"
                onClick={() => {
                  setHeroProductStudio(
                    <img
                      src="assets/product-img/beats07.1.jpeg"
                      alt="studio headphones"
                      className="earbudsHero"
                    />
                  );
                  setColorStudio("Matte Black");
                }}
              ></span>
            </div>
          </div>
          <div className="currentColor">
            <span> {colorStudio}</span>
            <span>
              <button className="button-28">View Details</button>
            </span>
          </div>
        </div>
      </div>
      {/* Product Info */}
      <div className="productFooterInfo">
        <div className="">
          <sup>1</sup>Compatible hardware and software required. Works with
          compatible content in supported apps. Not all content available in
          Dolby Atmos.
        </div>
        <div className="">
          <sup>2</sup>Testing conducted by Apple in April 2021 using
          preproduction Beats Studio Buds and Charging Case units and software
          paired with iPhone 11 Pro Max units and prerelease software. The
          playlist consisted of 358 unique audio tracks purchased from the
          iTunes Store (256-Kbps AAC encoding). Volume was set to 50% and Active
          Noise Cancellation and Transparency were turned off. Testing consisted
          of full Beats Studio Buds battery discharge while playing audio until
          the first Beats Studio Buds stopped playback. With Active Noise
          Cancellation turned on, listening time was up to 5 hours. Battery life
          depends on device settings, environment, usage, and many other
          factors.
        </div>
        <div className="">
          <sup>3</sup>One-touch pairing requires iOS 14.6 or later.
        </div>
        <div className="">
          <sup>4</sup>Fast Pair requires location enabled. Full access to
          features requires an Android 6.0 or newer device with Google Play
          Service enabled and Google Account.
        </div>
      </div>
    </div>
  );
};
