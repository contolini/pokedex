
export = Pokedex;

declare namespace Pokedex {
  export interface Pokemon {
    id: number;
    name: string;
    height?: number;
    weight?: number;
    sprites?: {animated?: string; normal?: string;};
    species_id?: number;
    base_experience?: number;
    order?: number;
    is_default?: number;
  }
  class Pokedex {
    pokemon(id: string|number): Pokemon;
  }
}