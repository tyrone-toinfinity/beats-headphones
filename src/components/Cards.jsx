import Card from "react-bootstrap/Card";
import "./Cards.css";

export const Cards = ({ products }) => {
  return (
    <Card style={{ width: "21rem" }} className="productCard ">
      <Card.Title className="productTitle">{products.name}</Card.Title>
      <Card.Text className="productPrice">${products.offers.price}</Card.Text>
      <Card.Img
        variant="top"
        src={products.image[1]}
        alt="headphones"
        width={276}
        height={276}
      />
    </Card>
  );
};
