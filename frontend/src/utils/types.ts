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
