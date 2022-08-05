import "./FruitList.css";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Loader from "../Loader/Loader";
import Error from "../Error/Error"
import FruitCard from "../FruitCard/FruitCard";

const fetchFruits = async () => {
  const res = await fetch("https://fe-cors-proxy.herokuapp.com", {
    headers: {
      "Target-URL": "https://www.fruityvice.com/api/fruit/all",
    },
  });
  return res.json();
};

const FruitList = () => {
  const { data, status } = useQuery(["fruits"], fetchFruits);
  const [filteredFruits, setFilteredFruits] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [errorMessage, setErrorMessage] = useState  (null);

  useEffect(() => {
    filterValues();
  }, [searchValue]);

  const filterValues = () => {
    if (searchValue) {
      let newFruits = data.filter((fruit) =>
        fruit.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      checkForFruits(newFruits);
    } else {
      setFilteredFruits(data);
    }
  };

  const checkForFruits = (newFruits) => {
    !newFruits.length
      ? setErrorMessage("Sorry, no movies match your search. Please try again.")
      : setFilteredFruits(newFruits);
  };

  return (
    <main>
      {status === "error" && <Error errorMessage={errorMessage}/>}
      {status === "loading" && <Loader />}
      {status === "success" && (
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
    </main>
  );
};

export default FruitList;
