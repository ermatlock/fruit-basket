import "./FruitList.css";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../contexts/DataContext";
// import { useQuery } from "@tanstack/react-query";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import FruitCard from "../FruitCard/FruitCard";

// const fetchFruits = async () => {
//   const res = await fetch("https://fe-cors-proxy.herokuapp.com", {
//     headers: {
//       "Target-URL": "https://www.fruityvice.com/api/fruit/all",
//     },
//   });
//   return res.json();
// };

const FruitList = () => {
  const {data, searchValue, status }  = useContext(DataContext);
//   const { data, status } = useQuery(["fruits"], fetchFruits);
  const [filteredFruits, setFilteredFruits] = useState([]);
//   const [searchValue, setSearchValue] = useState("");
//   const [errorMessage, setErrorMessage] = useState(null);

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
    if (!newFruits.length) {
      setErrorMessage("Sorry, no fruits match your search. Please try again.");
    } else {
      setFilteredFruits(newFruits);
    }
  };

//   const searchFruit = (value) => {
//     setSearchValue(value);
//   };

  const displayFruits = () => {
    return filteredFruits.map((fruit) => (
      <FruitCard
        key={fruit.id}
        id={fruit.id}
        name={fruit.name}
        nutritions={fruit.nutritions}
      />
    ))
  }

  return (
    <main>
    <div className="content-container">
            <div className="main-heading">
        <h2>Select your fruit and add it to the basket</h2>
      </div>
      {status === "error" && <Error errorMessage={errorMessage} />}
      {status === "loading" && <Loader />}
      {status === "success" && (
        <div className="fruit-list">
          {filteredFruits && displayFruits()}
        </div>
      )}
    </div>
    </main>
  );
};

export default FruitList;
