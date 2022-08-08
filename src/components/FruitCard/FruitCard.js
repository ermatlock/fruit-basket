import "./FruitCard.css";
import { nanoid } from "nanoid";
import { useContext, useState } from "react";
import { DataContext } from "../../contexts/DataContext";

const FruitCard = ({ id, name, nutritions }) => {
  const { trackedFruits, setTrackedFruits } = useContext(DataContext);
  const [isDisabled, setIsDisabled] = useState(true);
  const [amount, setAmount] = useState("");

  const handleInput = (e) => {
    e.target.value > 0 ? setIsDisabled(false) : setIsDisabled(true);
    e.target.value < 50 ? setAmount(e.target.value) : setAmount(50)
  };

  const submitFruit = (e) => {
    e.preventDefault();
    const newTrackedFruits = [...trackedFruits];
    const foundFruitIndex = newTrackedFruits.findIndex(
      (fruit) => fruit.name === name
    );
    if (foundFruitIndex === -1) {
      newTrackedFruits.push({
        id: nanoid(),
        name: name,
        nutritions: nutritions,
        stock: parseInt(amount),
      });
    } else {
      newTrackedFruits[foundFruitIndex].stock += parseInt(amount);
    }
    setTrackedFruits(newTrackedFruits);
    setAmount("");
    setIsDisabled(true);
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
      <form className="fruit-card-right">
        <label htmlFor="amount">Choose amount (1-50):</label>
        <input
          type="number"
          id="amount"
          name="amount"
          min="0"
          max="50"
          value={amount}
          onChange={handleInput}
        />
        <button disabled={isDisabled && "disabled"} onClick={submitFruit}>
          add to basket
        </button>
      </form>
    </div>
  );
};

export default FruitCard;
