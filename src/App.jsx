import { Home } from "./Home";
import { Shop } from "./Shop";
import { Cart } from "./Cart";
import { Support } from "./Support";
import { useRef } from "react";
import { Route, Routes } from "react-router-dom";

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
        <Route
          path="/support"
          element={<Support navRef={navRef} scrollToNav={scrollToNav} />}
        ></Route>
      </Routes>
    </div>
  );
};
