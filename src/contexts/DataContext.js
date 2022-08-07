import React, { useState, createContext, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

const fetchFruits = async () => {
  const res = await fetch("https://fe-cors-proxy.herokuapp.com", {
    headers: {
      "Target-URL": "https://www.fruityvice.com/api/fruit/all",
    },
  });
  return res.json();
};

const startingFruits = [{
  "name": "Apple",
  "id": 100,
  "nutritions": {
      "protein": 0.3,
      "fat": 0.4,
      "sugar": 10.3
  },
  "stock": 5
}, {
  "name": "Apricot",
  "id": 101,
  "nutritions": {
      "protein": 0.5,
      "fat": 0.1,
      "sugar": 3.2
  },
  "stock": 2
}]

const DataContext = createContext();
const DataContextProvider = ({ children }) => {
  const { data, status } = useQuery(["fruits"], fetchFruits);
  const [filteredFruits, setFilteredFruits] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [trackedFruits, setTrackedFruits] = useState([])
  const [totalStock, setTotalStock ] = useState(0);

  useEffect(() => {
    if (status === "error") {
      setErrorMessage(
        "Sorry, we were unable to fetch the data. Please try again."
      );
    }
    if (status === "loading") {
      setIsLoading(true);
    }
    if (data) {
      setIsLoading(false);
      setErrorMessage("")
      filterValues();
    }
  }, [status]);

  useEffect(() => {
    let newTotal = getTotalStock();
    setTotalStock(newTotal)
  }, [trackedFruits]);

  useEffect(() => {
    filterValues();
  }, [searchValue]);

  const getTotalStock = () => {
    return trackedFruits.reduce((sum, fruit) => {
      sum += fruit.stock;
      return sum;
    }, 0);
  };

  const filterValues = () => {
    if (!searchValue) {
      setFilteredFruits(data);
    } else {
      let newFruits = data.filter((fruit) =>
        fruit.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      checkForFruits(newFruits);
    }
  };

  const checkForFruits = (newFruits) => {
    if (!newFruits.length) {
      setErrorMessage("Sorry, no fruits match your search. Please try again.");
      setFilteredFruits(newFruits);
    } else {
      setErrorMessage("");
      setFilteredFruits(newFruits);
    }
  };

  const searchFruit = (value) => {
    setSearchValue(value);
  };

  return (
    <DataContext.Provider
      value={{
        data,
        searchValue,
        status,
        filteredFruits,
        searchFruit,
        errorMessage,
        isLoading,
        totalStock,
        trackedFruits,
        setTrackedFruits,
      }}
    >
      {data && children}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };
