import { colourTypes, PokemonCardProps } from "../utils/types";

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <>
      <div
        className="w-60 py-2 px-3 shadow-[0_0_5px_rgba(255,0,0,0.6)] border-2 border-red-200 rounded-2xl 
                   transition duration-300 ease-in-out transform hover:scale-105 hover:bg-red-200"
      >
        {/* Display Pokémon Image */}
        {pokemon.sprites.front_default && (
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="mx-auto my-4 w-40 h-40"
          />
        )}

        <h1 className="font-bold text-2xl underline text-center">{pokemon.name}</h1>

        <h2>Number: {pokemon.id}</h2>
        <h2>Height: {pokemon.height}</h2>
        <h2>Weight: {pokemon.weight}</h2>

        {/* Display Pokémon Types */}
        <h2>Types:</h2>
        <div className="flex justify-center gap-2">
          {pokemon.types.map((typeObj) => (
            <span
              key={typeObj.slot}
              className={`px-2 py-1 rounded-md ${colourTypes[typeObj.type.name]}`}
            >
              {typeObj.type.name}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
