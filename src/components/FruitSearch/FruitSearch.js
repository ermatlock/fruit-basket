import './FruitSearch.css'
import { useState } from 'react'

const FruitSearch = ({ searchFruit }) => {
  const [searchValue, setSearchValue] = useState("")

  const handleInput = (e) => {
    setSearchValue(e.target.value);
    searchFruit(e.target.value);
  };

  return (
    <form className="search">
      <label htmlFor="search" >Search for fruit</label>
      <input
        id="search"
        value={searchValue}
        // placeholder="Enter a fruit"
        onChange={handleInput}
        type="text"
      />
    </form>

  )
}

export default FruitSearch;