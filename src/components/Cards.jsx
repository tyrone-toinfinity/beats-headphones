import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Cards.css";

export const Cards = ({ products }) => {
  return (
    <Card style={{ width: "25rem" }} className="productCard ">
      <Card.Title className="productTitle">{products.name}</Card.Title>
      <Card.Text className="productPrice">${products.offers.price}</Card.Text>
      <Card.Img variant="top" src={products.image} />
      {/* <Card.Body>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body> */}
    </Card>
  );
};
