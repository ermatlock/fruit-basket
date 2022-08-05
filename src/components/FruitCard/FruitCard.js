import "./FruitCard.css";

const FruitCard = ({ id, name, nutritions }) => {
  return (
    <div className="fruit-card" id={id}>
      <h2>{name}</h2>
      <h4>Nutrition Stats:</h4>
      <p>Sugar: {nutritions.sugar}</p>
      <p>Protein: {nutritions.protein}</p>
      <p>Fat: {nutritions.fat}</p>
      <input type="checkbox" id='add' name="add" />
      <label for="add">Add to basket</label>
      <input type="number" id="amount" name="amount" min="1" max="50" />
      <label for="amount">Amount (1-50):</label>
    </div>
  );
};

export default FruitCard;
