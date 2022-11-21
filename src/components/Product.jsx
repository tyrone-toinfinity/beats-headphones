import React from "react";
import products from "../products.json";
import { Cards } from "./Cards";
import { useEffect } from "react";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import "./Product.css";

export const Product = () => {
  const [error, setError] = useState(null);
  const [isloaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // get data
  useEffect(() => {
    try {
      setItems(products);
      setIsLoaded(true);
    } catch {
      console.log("there was an error");
      setIsLoaded(true);
      setError(error);
    }
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isloaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <section>
        <div className="container-fluid productsContainer ">
          <div className="container-xl ">
            <h2 className="product-title">Popular Now</h2>
            <div className="row justify-content-center gap-2 ">
              {/* {items.headpones.map((item) => (
              <Cards key={item.id} products={item} className="" />
            ))} */}

              <Cards products={items.headpones[1]} />
              <Cards products={items.headpones[17]} />
              <Cards products={items.headpones[11]} />
            </div>
          </div>
        </div>
        <div className="container-xl ">
          <h2 className="product-title m-3">Holiday Shopping Through Apple</h2>
          <div className="justify-content-center row">
            <Card
              style={{ width: "20rem" }}
              className="shoppingCards text-center "
            >
              <Card.Img
                variant="top"
                src={"./assets/logos/delivery.svg"}
                className="shoppingImg "
              />
              <Card.Title className="shoppingHeader">
                Fast, Free Delivery
              </Card.Title>
              <Card.Text className="">
                Enjoy free two-day delivery on most in-stock items.
              </Card.Text>
              <Card.Text className="learnMore">
                <a href="https://www.apple.com/shop/help/shipping_delivery">
                  Learn More
                </a>{" "}
              </Card.Text>
            </Card>
            <Card
              style={{ width: "20rem" }}
              className="shoppingCards text-center "
            >
              <Card.Img
                variant="top"
                src={"./assets/logos/pickup.svg"}
                className="shoppingImg "
              />
              <Card.Title className="shoppingHeader">
                In-Store Pickup
              </Card.Title>
              <Card.Text className="">
                Pick up your online order at an Apple Store near you.
              </Card.Text>
              <Card.Text className="learnMore">
                <a href="https://www.apple.com/shop/help/shipping_delivery#pickup">
                  Learn More
                </a>{" "}
              </Card.Text>
            </Card>
            <Card
              style={{ width: "20rem" }}
              className="shoppingCards text-center "
            >
              <Card.Img
                variant="top"
                src={"./assets/logos/return.svg"}
                className="shoppingImg"
              />
              <Card.Title className="shoppingHeader">
                Extended Holiday Returns
              </Card.Title>
              <Card.Text className="">
                Free returns on eligible Beats until January 8, 2023.
              </Card.Text>
              <Card.Text className="learnMore">
                <a href="https://www.apple.com/shop/help/returns_refund#policy?cid=beats_wb_hmp_holidaypromo_us_na_na">
                  Learn More
                </a>{" "}
              </Card.Text>
            </Card>
          </div>
        </div>
      </section>
    );
  }
};
