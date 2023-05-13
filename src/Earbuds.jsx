import "./Earbuds.css";
import { useLocation } from "react-router-dom";

export const Earbuds = () => {
  let { state } = useLocation();
  console.log(`product data`, state);

  return (
    <div>
      <h1>EARBUDS!!</h1>
    </div>
  );
};
