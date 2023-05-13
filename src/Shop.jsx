import { useState, useRef } from "react";
import { ShippingBanner } from "./index";
import { ProductInfo } from "./components/ProductInfo";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
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

  const filterProducts = (name) => {
    return products.headpones.filter((products) => products.urlName === name);
  };

  const productsBtn = <button className="button-28">View Details</button>;

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
            <p>
              {filterProducts("beats-fit-pro").length + " "}
              Colors
            </p>
            <div>
              {filterProducts("beats-fit-pro").map((product) => (
                <span
                  key={product.id}
                  className="dots"
                  onClick={() => {
                    setEarbudsHeroProduct(
                      <img
                        src={product.image[0]}
                        className="earbudsHero"
                        width={572}
                        height={572}
                      />
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
              <Link
                to="/products/earbuds/beats-fit-pro"
                state={filterProducts("beats-fit-pro")}
              >
                {productsBtn}
              </Link>
            </span>
          </div>
        </div>
      </div>
      {/* Poster */}
      <div className="posterEarbuds">
        <p className="posterEarbudsHeader">beats ˣ kim</p>
        <p className="posterEarbudsHeader2">Special Edition Beats Fit Pro</p>
        <Link
          to="/products/earbuds/beats-fit-pro"
          state={filterProducts("beats-fit-pro")}
        >
          {" "}
          <button className="posterEarbudsBtn">shop</button>{" "}
        </Link>
      </div>
      <Card style={{ width: "20rem" }} className="posterCardEarbuds">
        <Card.Img
          variant="top"
          src="./assets/product-img/earbudsPosterMobile.webp"
          className="posterCardImg"
          alt="woman wearing beats heaphones"
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
            <p>
              {filterProducts("beats-solo").length + " "}
              Colors
            </p>
            <div>
              {filterProducts("beats-solo").map((product) => (
                <span
                  key={product.id}
                  className="dotsSolo"
                  onClick={() => {
                    setHeadphonesHeroProduct(
                      <img
                        src={product.image[0]}
                        alt="Solo Headphones"
                        className="earbudsHero"
                        width={572}
                        height={572}
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
              <Link
                to="/products/headphones/beats-solo"
                state={filterProducts("beats-solo")}
              >
                {productsBtn}
              </Link>
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
            <p>
              {filterProducts("beats-studio").length + " "}
              Colors
            </p>
            <div>
              {filterProducts("beats-studio").map((product) => (
                <span
                  key={product.id}
                  className="dotsStudio"
                  onClick={() => {
                    setHeroProductStudio(
                      <img
                        src={product.image[0]}
                        alt="Studio Headphones"
                        className="earbudsHero"
                        width={572}
                        height={572}
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
              <Link
                to="/products/headphones/beats-studio"
                state={filterProducts("beats-studio")}
              >
                {productsBtn}
              </Link>
            </span>
          </div>
        </div>
      </div>
      <ProductInfo />
    </div>
  );
};
