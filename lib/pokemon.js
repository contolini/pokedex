const pokeData = require('../lib/pokemon.json');

module.exports = input => {
  if (!input) {
    return pokeData;
  }

  let pokemon = pokeData.find((pokemon) => {
    if (Number(input) && input % 1 === 0) {
      return pokemon.species_id == input;
    } else {
      return pokemon.name === input;
    }
  });

  return pokemon || new Error(`${input} was not found in the Pokedex.`);
}
