import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Product, Footer, HeroBanner, Navbar } from "./index";
import "./Main.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </React.StrictMode>
);
