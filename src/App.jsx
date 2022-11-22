import { Home } from "./Home";
import { Shop } from "./Shop";
import { Cart } from "./Cart";
import { useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export const App = () => {
  const navRef = useRef();
  const scrollToNav = () =>
    navRef.current.scrollIntoView({ behavior: "smooth" });
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Home navRef={navRef} scrollToNav={scrollToNav} />}
        ></Route>
        <Route
          path="/shop"
          element={<Shop navRef={navRef} scrollToNav={scrollToNav} />}
        ></Route>
        <Route
          path="/cart"
          element={<Cart navRef={navRef} scrollToNav={scrollToNav} />}
        ></Route>
      </Routes>
    </div>
  );
};
