import "./FruitSearch.css";
import { useContext, useState } from "react";
import { DataContext } from "../../contexts/DataContext";

const FruitSearch = () => {
  const { searchFruit }  = useContext(DataContext);
  const [searchValue, setSearchValue] = useState("");

  const handleInput = (e) => {
    setSearchValue(e.target.value);
    searchFruit(e.target.value);
  };

  return (
    <form className="search fade-in">
      <label htmlFor="search">Search for fruit</label>
      <input
        id="search"
        value={searchValue}
        onChange={handleInput}
        type="text"
      />
    </form>
  );
};

export default FruitSearch;
