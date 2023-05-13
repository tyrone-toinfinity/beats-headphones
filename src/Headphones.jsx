import "./Headphones.css";
import { useLocation } from "react-router-dom";

export const Headphones = () => {
  let { state } = useLocation();
  console.log(`Headphone data`, state);
  return (
    <div>
      <h1>HEADPHONES!!</h1>
    </div>
  );
};
