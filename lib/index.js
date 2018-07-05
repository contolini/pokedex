const pokemon = require('./pokemon');

module.exports = class Pokedex {
  pokemon(id) {
    return getPokemon(id);
  }
}

function getPokemon(id) {
  return pokemon(id);
}
