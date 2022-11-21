import { Home } from "./Home";
import { Shop } from "./Shop";
import { Cart } from "./Cart";

import { BrowserRouter, Route, Routes } from "react-router-dom";
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
};
