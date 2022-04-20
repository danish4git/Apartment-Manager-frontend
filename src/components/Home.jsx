import "./Home.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div id="homeMain">
      <h1 id="homeHead">Welcome to Flat Manager App</h1>

      <button onClick={handleClick}>click to see Flats</button>
    </div>
  );
};
