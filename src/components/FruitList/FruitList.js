import "./FruitList.css";
import { useContext, useEffect } from "react";
import { DataContext } from "../../contexts/DataContext";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import FruitCard from "../FruitCard/FruitCard";

const FruitList = () => {
  const { errorMessage, filteredFruits, isLoading } = useContext(DataContext);

  return (
    <main>
      <div className="content-container fade-in">
      <div className="main-heading">
        <h2>Select your fruit and add it to the basket</h2>
      </div>
        {isLoading && <Loader />}
        {errorMessage && <Error errorMessage={errorMessage} />}
        {filteredFruits && (
          <div className="fruit-list">
            {filteredFruits.map((fruit) => (
              <FruitCard
                key={fruit.id}
                id={fruit.id}
                name={fruit.name}
                nutritions={fruit.nutritions}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default FruitList;
