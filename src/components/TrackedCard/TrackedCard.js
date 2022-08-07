import "./TrackedCard.css";

const TrackedCard = ({ id, name, nutritions, stock }) => {
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
        <h1>{stock}</h1>
        <button className="increment-button">+</button>
        <button className="decrement-button">-</button>
      </div>
    </div>
  );
};

export default TrackedCard;
