import products from "../products.json";
import { Cards } from "./Cards";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import "./ProductBanner.css";

export const ProductBanner = () => {
  const [error, setError] = useState(null);
  const [isloaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // get data
  useEffect(() => {
    try {
      setItems(products);
      setIsLoaded(true);
    } catch {
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
              <Cards products={items.headpones[1]} />
              <Cards products={items.headpones[15]} />
              <Cards products={items.headpones[9]} />
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
                alt="delievery logo"
                loading="lazy"
              />
              <Card.Title className="shoppingHeader">
                Fast, Free Delivery
              </Card.Title>
              <Card.Text className="">
                Enjoy free two-day delivery on most in-stock items.
              </Card.Text>
              <Card.Text className="learnMore">
                <a href="https://.com/shop/help/shipping_delivery">
                  Shipping and delivery
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
                className="shoppingImg"
                alt="pickup logo"
                loading="lazy"
              />
              <Card.Title className="shoppingHeader">
                In-Store Pickup
              </Card.Title>
              <Card.Text className="">
                Pick up your online order at an Apple Store near you.
              </Card.Text>
              <Card.Text className="learnMore">
                <a href="https://www.apple.com/shop/help/shipping_delivery#pickup">
                  In Store Pick Up
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
                alt="return logo"
                loading="lazy"
              />
              <Card.Title className="shoppingHeader">
                Extended Holiday Returns
              </Card.Title>
              <Card.Text className="">
                Free returns on eligible Beats until January 8, 2023.
              </Card.Text>
              <Card.Text className="learnMore">
                <a href="https://www.apple.com/shop/help/returns_refund#policy?cid=beats_wb_hmp_holidaypromo_us_na_na">
                  How To Return
                </a>{" "}
              </Card.Text>
            </Card>
          </div>
        </div>
      </section>
    );
  }
};
