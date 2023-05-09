import { Home } from "./Home";
import { Shop } from "./Shop";
import { Cart } from "./Cart";
import { Support } from "./Support";
import { ErrorPage } from "./ErrorPage";
import { useEffect } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";

export const App = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    let title;
    switch (pathname) {
      case "/products":
        title = "Wireless Headphones and Earbuds - Beats";
        break;
      case "/cart":
        title = "Beats by Dre - Cart";
        break;
      case "/support":
        title = "Beats Support - Beats by Dre";
        break;
      case "/404":
        title = "Page Not Found (404) - Beats";
        break;
      default:
        title = "Beats by Dre";
        break;
    }
    document.title = title;
  }, [pathname]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Shop />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/support" element={<Support />}></Route>
        <Route path="404" element={<ErrorPage />}></Route>
        <Route path="*" element={<Navigate to="404" />}></Route>
      </Routes>
    </div>
  );
};
