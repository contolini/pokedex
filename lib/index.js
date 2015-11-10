import pokemon from './pokemon';

export default class Pokedex {
  pokemon(id, cb) {
    return getPokemon(id, cb);
  }
}

function getPokemon(id, cb) {
  let isNum = Number(id) === id && id % 1 === 0;
  return isNum ? getPokemonById(id, cb) : getPokemonByName(id, cb);
}

function getPokemonById(id, cb) {
  let monster = pokemon[id];
  cb(null, monster);
}

function getPokemonByName(id, cb) {
  let monster = pokemon[id];
  cb(null, monster);
}
