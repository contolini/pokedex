import pokemon from './pokemon';

export default class Pokedex {
  pokemon(id) {
    return getPokemon(id);
  }
}

function getPokemon(id) {
  return pokemon(id);
}
