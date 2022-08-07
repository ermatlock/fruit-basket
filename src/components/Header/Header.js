import "./Header.css";
import FruitSearch from "../FruitSearch/FruitSearch";
import { Link, useLocation } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext";
import { useContext } from "react";

const Header = () => {
  const { totalStock } = useContext(DataContext);
  const location = useLocation();

  return (
    <header>
      <div className="header-left">
        <img
          className="logo"
          alt="wooden fruit cart brimming over with fruit"
          src="./images/fruit-basket.png"
        />
        <h1>FruitBasket</h1>
      </div>
      <div className="header-middle">
        {location.pathname === "/" && <FruitSearch />}
      </div>
      <div className="header-right">
        {location.pathname !== "/" ? (
          <Link to="/">
            <button className="nav-btn">view fruit list</button>
          </Link>
        ) : (
          <Link to="/fruit-tracker">
            <button className="nav-btn">track my fruits</button>
          </Link>
        )}

        <div className="basket">
          <span className="notification-icon--fixed">
            <small className="notification-badge">{totalStock}</small>
          </span>
          <img alt="empty wicker basket" src="./images/wicker-basket.png" />
        </div>
      </div>
    </header>
  );
};

export default Header;
