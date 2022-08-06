import './FruitSearch.css'
import { useState } from 'react'

const FruitSearch = ({ searchFruit }) => {
  const [searchValue, setSearchValue] = useState("")

  const handleSearchInputChanges = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    searchFruit(e.target.value);
  };

  return (
    <form className="search">
      <input
        value={searchValue}
        placeholder="Enter a fruit"
        onChange={handleSearchInputChanges}
        type="text"
      />
    </form>

  )
}

export default FruitSearch;