import "./FruitCard.css";

const FruitCard = ({ id, name, nutritions }) => {
  return(
  <div className="fruit-card" id={id}>
    <h3>{name}</h3>
    <h4>Nutrition Stats:</h4>
    <p>Sugar: {nutritions.sugar}</p>
    <p>Protein: {nutritions.protein}</p>
    <p>Fat: {nutritions.fat}</p>
  </div>
  )
};

export default FruitCard;
