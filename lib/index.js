import pokemon from './pokemon';

export default class Pokedex {
  pokemon(id) {
    return getPokemon(id);
  }
}

function getPokemon(id) {
  let isNum = Number(id) === id && id % 1 === 0;
  return isNum ? getPokemonById(id) : getPokemonByName(id);
}

function getPokemonById(id) {
  return pokemon(id);
}

function getPokemonByName(id) {
  return pokemon(id);
}
