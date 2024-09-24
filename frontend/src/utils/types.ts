export interface PokemonType {
  id: number;
  name: string;
  type: string;
  weight: number;
  height: number;
  types: PokemonTypesList[];
  sprites: {
    front_default: string;
  };
}

interface PokemonTypesList {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonCardProps {
  pokemon: PokemonType;
}

export const colourTypes: { [key: string]: string } = {
  normal: "bg-gray-300",
  fighting: "bg-red-500",
  flying: "bg-blue-300",
  poison: "bg-purple-400",
  ground: "bg-zinc-400",
  rock: "bg-yellow-400",
  bug: "bg-green-500",
  ghost: "bg-indigo-600",
  steel: "bg-gray-600",
  fire: "bg-red-300",
  water: "bg-blue-500",
  grass: "bg-green-300",
  electric: "bg-yellow-300",
  psychic: "bg-pink-400",
  ice: "bg-cyan-300",
  dragon: "bg-orange-400",
  dark: "bg-gray-700",
  fairy: "bg-pink-200",
  unknown: "bg-gray-500",
  shadow: "bg-black",
};

export const pokemonTypes: string[] = [
  "normal",
  "fighting",
  "flying",
  "poison",
  "ground",
  "rock",
  "bug",
  "ghost",
  "steel",
  "fire",
  "water",
  "grass",
  "electric",
  "psychic",
  "ice",
  "dragon",
  "dark",
  "fairy",
];
