import { Home } from "./Home";
import { Shop } from "./Shop";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
      </Routes>
    </div>
  );
};
