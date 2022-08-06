import "./Header.css";
import FruitSearch from "../FruitSearch/FruitSearch";

const Header = () => {
  return (
    <header>
      <div className="header-left">
        <img className="logo" alt="wooden fruit cart brimming over with fruit" src="./images/fruit-basket.png" />
        <h1>FruitBasket</h1>
      </div>
      <div className="header-middle">
        <FruitSearch/>
      </div>
      <div className="header-right">
        <button className="nav-btn">Go To Basket</button>
        <img className="basket" alt="empty wicker basket" src="./images/wicker-basket.png" />

      </div>
    </header>
  );
};

export default Header;
