import "./FruitTracker.css";
import { useContext, useState } from "react";
import { DataContext } from "../../contexts/DataContext";
import TrackedCard from "../TrackedCard/TrackedCard";

const FruitTracker = () => {
  const { trackedFruits } = useContext(DataContext);
  return (
    <main>
      <div className="content-container fade-in">
        <div className="main-heading">
          <h2>Keep track of all your available fruits!</h2>
        </div>
        <div className="fruit-list">
            {trackedFruits.map((fruit) => (
              <TrackedCard
                key={fruit.id}
                id={fruit.id}
                name={fruit.name}
                nutritions={fruit.nutritions}
                stock={fruit.stock}
              />
            ))}
          </div>
      </div>
    </main>
  );
};

export default FruitTracker;
