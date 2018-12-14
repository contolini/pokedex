interface Pokemon {
  id: number;
  name: string;
  height?: number;
  weight?: number;
  sprites?: {
    animated?: string;
    normal?: string;
  };
  species_id?: number;
  base_experience?: number;
  order?: number;
  is_default?: number;
}

declare function getPokemon(id: string | number): Pokemon;

declare namespace Pokedex {
  class Pokedex {
    pokemon(id: string | number): Pokemon;
  }
}

export = Pokedex;
