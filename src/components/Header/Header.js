import "./Header.css";
import FruitSearch from "../FruitSearch/FruitSearch";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <header>
      <Link to="/">
        <div className="header-left">
          <img
            className="logo"
            alt="wooden fruit cart brimming over with fruit"
            src="./images/fruit-basket.png"
          />
          <h1>FruitBasket</h1>
        </div>
      </Link>
      <div className="header-middle">
        {location.pathname === "/" && <FruitSearch />}
      </div>
      <div className="header-right">
        {location.pathname !== "/" ? (
          <Link to="/">
            <button className="back-button">Back to Fruits</button>
          </Link>
        ) : (
          <Link to="/fruit-tracker">
            <button className="nav-btn">track my fruits</button>
          </Link>
        )}

        <div className="basket">
          <a className="notification-icon--fixed">
            <small className="notification-badge">12</small>
          </a>
          <img alt="empty wicker basket" src="./images/wicker-basket.png" />
        </div>
      </div>
    </header>
  );
};

export default Header;
