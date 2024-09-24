import axios from "axios";
import { useEffect, useState } from "react";
import { PokemonType } from "./utils/types";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [pokemonData, setPokemonData] = useState<PokemonType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [offset, setOffset] = useState<number>(10); // Start offset for loading more Pokemon

  // Reusable function to fetch Pokemon data
  const fetchPokemonBatch = async (start: number, count: number) => {
    const promises = [];
    for (let i = start; i < start + count; i++) {
      promises.push(axios.get(`http://localhost:5000/api/pokemon/${i}`));
    }
    return await Promise.all(promises);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await fetchPokemonBatch(1, 10); // Fetch the initial 10 Pokemon
        setPokemonData(results.map((res) => res.data));
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Function to load more Pokemon
  const loadMorePokemon = async () => {
    setLoading(true);
    try {
      const results = await fetchPokemonBatch(offset + 1, 10);
      setPokemonData((prev) => [...prev, ...results.map((res) => res.data)]);
      setOffset((prev) => prev + 10);
    } catch (error) {
      console.error("Error fetching more Pokémon", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className="flex flex-wrap">
        {pokemonData.map((pokemon) => (
          <div key={pokemon.id} className="m-5">
            <PokemonCard pokemon={pokemon} />
          </div>
        ))}
      </div>
      <button
        onClick={loadMorePokemon}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Load More
      </button>
    </>
  );
}

export default App;
