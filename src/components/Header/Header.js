import "./Header.css";
import FruitSearch from "../FruitSearch/FruitSearch";
import { Link, useLocation } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext";
import { useContext } from "react";
import logo from "../../assets/images/fruit-basket.png";
import stockBasket from "../../assets/images/wicker-basket.png";

const Header = () => {
  const { totalStock } = useContext(DataContext);
  const location = useLocation();

  return (
    <header>
      <div className="header-container">
        <div className="header-left">
          <div className="logo-container">
            <img
              className="logo"
              alt="wooden fruit cart brimming over with fruit"
              src={logo}
            />
            <h1>FruitBasket</h1>
          </div>
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
          <div className="basket-container">
            <span className="notification-icon--fixed">
              <small className="notification-badge">{totalStock}</small>
            </span>
            <img
              className="basket"
              alt="empty wicker basket"
              src={stockBasket}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
