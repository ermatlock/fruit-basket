import './FruitList.css'
import { useQuery } from "@tanstack/react-query";
import FruitCard from '../FruitCard/FruitCard'

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
  

  return (
    <main>
      {status === "error" && <p>Error fetching data</p>}
        {status === "loading" && <p>Fetching data...</p>}
        {status === "success" && (
          <div>
          {data.map((fruit) => (
            <FruitCard
              key={fruit.id}
              id={fruit.id}
              name={fruit.name}
              nutritions={fruit.nutritions}
            />
          ))}
        </div>
        )}
        {/* <FruitCard/> */}
    </main>
  )
}

export default FruitList;