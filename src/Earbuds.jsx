import "./Earbuds.css";
import { useLocation } from "react-router-dom";
import { Carousel } from "antd";

export const Earbuds = () => {
  let { state } = useLocation();
  console.log(`product data`, state);

  const images = [
    "https://images.unsplash.com/photo-1683926574610-099f6da5f49c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    "https://images.unsplash.com/photo-1683868929926-93de3bcb518b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    "https://images.unsplash.com/photo-1682695795255-b236b1f1267d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    // Add more image URLs as needed
  ];

  return (
    <div>
      <h1>Product Detail Page</h1>
      <Carousel>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Product Image ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
