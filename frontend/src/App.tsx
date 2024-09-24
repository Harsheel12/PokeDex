import axios from "axios";
import { useEffect, useState } from "react";
import { PokemonType, pokemonTypes } from "./utils/types";
import PokemonCard from "./components/PokemonCard";
import { Loader, Select, Button, TextInput } from "@mantine/core";

function App() {
  const [pokemonData, setPokemonData] = useState<PokemonType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [offset, setOffset] = useState<number>(10);
  const [sortOption, setSortOption] = useState<string>("lowest-number");
  const [typeFilter, setTypeFilter] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

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

  // Function to sort Pokemon data based on selected option
  const sortPokemonData = (option: string) => {
    let sortedData = [...pokemonData];

    switch (option) {
      case "lowest-number":
        sortedData.sort((a, b) => a.id - b.id);
        break;
      case "highest-number":
        sortedData.sort((a, b) => b.id - a.id);
        break;
      case "lowest-weight":
        sortedData.sort((a, b) => a.weight - b.weight);
        break;
      case "highest-weight":
        sortedData.sort((a, b) => b.weight - a.weight);
        break;
      case "lowest-height":
        sortedData.sort((a, b) => a.height - b.height);
        break;
      case "highest-height":
        sortedData.sort((a, b) => b.height - a.height);
        break;
      default:
        break;
    }

    setPokemonData(sortedData);
  };

  useEffect(() => {
    if (sortOption) {
      sortPokemonData(sortOption);
    }
  }, [sortOption]);

  // Function to filter Pokemon by type
  const filterByType = (type: string | null) => {
    setTypeFilter(type);
  };

  // Function to clear filters
  const clearFilters = () => {
    setSortOption("");
    setTypeFilter(null);
  };

  // Filtered Pokemon data
  const filteredPokemonData = pokemonData.filter((pokemon) => {
    const matchesName = pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesId = pokemon.id.toString().includes(searchTerm);
    const matchesType = typeFilter
      ? pokemon.types.some((typeObj) => typeObj.type.name === typeFilter)
      : true;

    return (matchesName || matchesId) && matchesType;
  });

  return (
    <>
      <div className="flex flex-col items-center max-w-screen py-10 px-5 sm:px-10 lg:px-20">
        <h1 className="font-bold text-3xl underline text-center">Welcome to the Pokedex</h1>

        <h2 className="text-lg text-center my-3">
          The place where you can find all the info you want about your favourite Pokemons!
        </h2>

        <div className="w-full flex flex-col items-center my-3">
          <div className="flex flex-col md:flex-row items-center md:items-end">
            <Select
              label="Sort Pokemon By"
              placeholder="Pick a filter"
              data={[
                { value: "lowest-number", label: "Lowest Number (First)" },
                { value: "highest-number", label: "Highest Number (First)" },
                { value: "lowest-weight", label: "Lowest Weight (First)" },
                { value: "highest-weight", label: "Highest Weight (First)" },
                { value: "lowest-height", label: "Lowest Height (First)" },
                { value: "highest-height", label: "Highest Height (First)" },
              ]}
              value={sortOption}
              onChange={(value) => setSortOption(value ?? "")}
              className="mb-4 w-full md:w-64"
            />

            <Select
              label="Filter Pokemon by Type"
              placeholder="Pick a type"
              data={pokemonTypes.map((type) => ({ value: type, label: type }))}
              value={typeFilter}
              onChange={filterByType}
              className="mb-4 w-full md:w-64 mx-5"
            />

            <Button onClick={clearFilters} className="mb-4" color="red">
              Clear Filters
            </Button>
          </div>

          <h1 className="text-center my-3">Can't find what you are looking for? Search below :)</h1>

          <TextInput
            placeholder="Search by name or number"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.currentTarget.value)}
            className="mb-4 w-full md:w-1/2"
          />
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <Loader color="blue" size="xl" />
          </div>
        ) : (
          <>
            {/* Pokémon Data */}
            <div className="w-full flex flex-wrap justify-center">
              {filteredPokemonData.map((pokemon) => (
                <div key={pokemon.id} className="m-5">
                  <PokemonCard pokemon={pokemon} />
                </div>
              ))}
            </div>
          </>
        )}

        <Button loading={loading} onClick={loadMorePokemon} className="my-4" size="lg" color="blue">
          Load More
        </Button>
      </div>
    </>
  );
}

export default App;
