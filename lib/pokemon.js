const pokemonById = require('./pokemon-by-id.json');
const pokemonByName = require('./pokemon-by-name.json')

module.exports = id => {
  if (!id) {
    return pokemonByName;
  }
  const pokemon = Number(id) === id && id % 1 === 0
                ? pokemonById[id]
                : pokemonByName[id];
  return pokemon || new Error(`${id} was not found in the Pokedex.`);
}
