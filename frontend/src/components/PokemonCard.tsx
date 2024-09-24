import { PokemonCardProps } from "../utils/types";

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <>
      <div className="w-60 py-2 px-3 shadow-xl border-2 border-gray-200 rounded-2xl">
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
            <span key={typeObj.slot} className="px-2 py-1 bg-blue-200 rounded-md">
              {typeObj.type.name}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
