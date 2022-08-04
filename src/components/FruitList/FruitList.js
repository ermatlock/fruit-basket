import './FruitList.css'
import { useQuery } from "@tanstack/react-query";

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
            <p key={fruit.id}>{fruit.name}</p>
          ))}
        </div>
        )}
    </main>
  )
}

export default FruitList;