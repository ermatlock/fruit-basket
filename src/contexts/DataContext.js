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

const DataContext = createContext();
const DataContextProvider = ({ children }) => {
  const { data, status } = useQuery(["fruits"], fetchFruits);
  const [filteredFruits, setFilteredFruits] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(false);

  // useEffect(() => {
  //       filterValues();
  //     }, [searchValue]);
    
  //     const filterValues = () => {
  //       if (searchValue) {
  //         let newFruits = data.filter((fruit) =>
  //           fruit.name.toLowerCase().includes(searchValue.toLowerCase())
  //         );
  //         checkForFruits(newFruits);
  //       } else {
  //         setFilteredFruits(data);
  //       }
  //     };
    
  //     const checkForFruits = (newFruits) => {
  //       if (!newFruits.length) {
  //         setErrorMessage("Sorry, no fruits match your search. Please try again.");
  //       } else {
  //         setFilteredFruits(newFruits);
  //       }
  //     };
    
  //     const searchFruit = (value) => {
  //       setSearchValue(value);
  //     };
  


  return (
    <DataContext.Provider value={{ data, searchValue, status }}>
      {data && children}
      {/* {!data && error ? (
        <>
          <Error />
        </>
      ) : null} */}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };
