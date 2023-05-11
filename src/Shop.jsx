import { useState, useRef } from "react";
import { ShippingBanner } from "./index";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { useParams } from "react-router-dom";

import "./Shop.css";

import products from "./products.json";

export const Shop = () => {
  const [color, setColor] = useState("Black");
  const [colorSolos, setColorSolos] = useState("Rose Gold");
  const [colorStudio, setColorStudio] = useState("White");
  const [earbudsHeroProduct, setEarbudsHeroProduct] = useState(
    <img
      src="assets/product-img/beats04.1.webp"
      alt="beats headphones"
      className="earbudsHero"
    />
  );

  const [headphonesHeroProduct, setHeadphonesHeroProduct] = useState(
    <img
      src="assets/product-img/beats16.1.webp"
      alt="beats earbuds"
      className="earbudsHero"
    />
  );
  const [heroProductStudio, setHeroProductStudio] = useState(
    <img
      src="assets/product-img/beats05.1.webp"
      alt="beats earbuds"
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
          <p className="newColors">new colors</p>
          <p className="earBudsHeroTitle">Beats Fit Pro</p>
          <p className="earBudsHeroPrice">$199.99</p>
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
          src="./assets/product-img/earbudsPosterMobile.webp"
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
          <p className="earBudsHeroTitle">
            Beats Solo³ <br />
            Wireless
          </p>
          <p className="earBudsHeroPrice">$199.99</p>
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
            <h6>
              {products.headpones.filter(
                (products) => products.urlName === "beats-solo"
              ).length + " "}
              Colors
            </h6>
            <div>
              {products.headpones
                .filter((product) => product.urlName === "beats-solo")
                .map((product) => (
                  <span
                    key={product.id}
                    className="dotsSolo"
                    onClick={() => {
                      setHeadphonesHeroProduct(
                        <img
                          src={product.image[0]}
                          alt="Solo Headphones"
                          className="earbudsHero"
                        />
                      );
                      setColorSolos(
                        product.color.charAt(0).toUpperCase() +
                          product.color.slice(1)
                      );
                    }}
                  ></span>
                ))}
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
            <h6>
              {products.headpones.filter(
                (products) => products.urlName === "beats-solo"
              ).length + " "}
              Colors
            </h6>
            <div>
              {products.headpones
                .filter((product) => product.urlName === "beats-studio")
                .map((product) => (
                  <span
                    key={product.id}
                    className="dotsStudio"
                    onClick={() => {
                      setHeroProductStudio(
                        <img
                          src={product.image[0]}
                          alt="Studio Headphones"
                          className="earbudsHero"
                        />
                      );
                      setColorStudio(
                        product.color.charAt(0).toUpperCase() +
                          product.color.slice(1)
                      );
                    }}
                  ></span>
                ))}
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
