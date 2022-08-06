import "./FruitCard.css";

const FruitCard = ({ id, name, nutritions }) => {
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
        <label htmlFor="amount">Choose amount (1-50):</label>
        <input type="number" id="amount" name="amount" min="1" max="50" />
        <button className="button-fruit-card">add to basket</button>
      </div>
    </div>
  );
};

export default FruitCard;
