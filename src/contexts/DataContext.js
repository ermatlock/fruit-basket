import React, { useState, createContext, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import emailjs from '@emailjs/browser';

const fetchFruits = async () => {
  const res = await fetch("https://fe-cors-proxy.herokuapp.com", {
    headers: {
      "Target-URL": "https://www.fruityvice.com/api/fruit/all",
    },
  });
  if (!res.ok) {
    throw new Error('Network response was not ok')
  }
  return res.json();
};

const DataContext = createContext();
const DataContextProvider = ({ children }) => {
  const { data, status } = useQuery(["fruits"], fetchFruits);
  const [filteredFruits, setFilteredFruits] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [trackedFruits, setTrackedFruits] = useState([]);
  const [totalStock, setTotalStock] = useState(0);
  const [emailAddress, setEmailAddress] = useState("");

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
      filterValues();
      setIsLoading(false);
      setErrorMessage("");
    }
  }, [status]);

  useEffect(() => {
    if (emailAddress) {
      const templateParams = {
        user_email: emailAddress,
      };
      emailjs.send(
        'service_5dcbypf',
        'fruitbasket_signup',
        templateParams,
        'BDj1k9wy99YQCMQJl'
      ).then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
     }, function(error) {
        console.log('FAILED...', error);
     });
    }
  }, [emailAddress]);

  useEffect(() => {
    let newTotal = getTotalStock();
    setTotalStock(newTotal);
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
        emailAddress,
        setEmailAddress,
      }}
    >
      {data && children}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };
