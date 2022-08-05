import "./FruitCard.css";

const FruitCard = ({ id, name, nutritions }) => {
  return (
    <div className="fruit-card" id={id}>
      <h3>{name}</h3>
      <label for="add">Add to basket</label>
      <input type="checkbox" id={id} name="add" />
      <label for="amount">Amount (1-50):</label>
      <input type="number" id="amount" name="amount" min="1" max="50" />
      <h4>Nutrition Stats:</h4>
      <p>Sugar: {nutritions.sugar}</p>
      <p>Protein: {nutritions.protein}</p>
      <p>Fat: {nutritions.fat}</p>
    </div>
  );
};

export default FruitCard;
