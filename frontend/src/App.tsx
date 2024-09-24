import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [pokemonData, setPokemonData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const promises = [];
        for (let i = 1; i <= 20; i++) {
          // Fetch first 20 Pokémon
          promises.push(axios.get(`http://localhost:5000/api/pokemon/${i}`));
        }
        const results = await Promise.all(promises);
        setPokemonData(results.map((res) => res.data));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  console.log(pokemonData);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div>
        {pokemonData.map((pokemon) => (
          <h1>{pokemon.name}</h1>
        ))}
      </div>
    </>
  );
}

export default App;
