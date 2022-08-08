import "./TrackedCard.css";
import { useContext, useState } from "react";
import { DataContext } from "../../contexts/DataContext";
import Swal from "sweetalert2";

const TrackedCard = ({ id, name, nutritions, stock }) => {
  const { trackedFruits, setTrackedFruits } = useContext(DataContext);
  const [stockValue, setStockValue] = useState(stock);

  const incrementHandler = () => {
    setStockValue(stock++);
    updateStock(stock++);
  };

  const decrementHandler = () => {
    if (stock > 0) {
      setStockValue(stock--);
      updateStock(stock--);
    }
  };

  const updateStock = (amount) => {
    const newTrackedFruits = [...trackedFruits];
    const foundFruitIndex = newTrackedFruits.findIndex(
      (fruit) => fruit.name === name
    );
    newTrackedFruits[foundFruitIndex].stock = amount;
    setTrackedFruits(newTrackedFruits);
  };

  const removeFruit = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You can add any fruit again by using the fruit list",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const newTrackedFruits = trackedFruits.filter(
          (fruit) => fruit.name !== name
        );
        setTrackedFruits(newTrackedFruits);
      }
    });
  };

  return (
    <div className="fruit-card" id={id}>
      <div className="fruit-card-left">
        <h2>{name}</h2>
        <ul>
          Nutrition Stats:
          <li>Sugar: {nutritions.sugar}g</li>
          <li>Protein: {nutritions.protein}g</li>
          <li>Fat: {nutritions.fat}g</li>
        </ul>
      </div>
      <div className="fruit-card-right">
        <h4>Current stock</h4>
        <div className="stock-container">
          <div className="stock-box">
            <h1>{stock}</h1>
          </div>
          <button className="decrement-button" onClick={decrementHandler}>
            -
          </button>
          <button className="increment-button" onClick={incrementHandler}>
            +
          </button>
        </div>
        <button onClick={removeFruit}>remove fruit</button>
      </div>
    </div>
  );
};

export default TrackedCard;
