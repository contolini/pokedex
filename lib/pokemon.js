import fs from 'fs';
import path from 'path';

const pokemonById = JSON.parse(fs.readFileSync(path.join(__dirname, 'pokemon-by-id.json'), 'utf8'));
const pokemonByName = JSON.parse(fs.readFileSync(path.join(__dirname, 'pokemon-by-name.json'), 'utf8'));

export default function (id) {
  if (!id) {
    return pokemonByName;
  }
  const pokemon = Number(id) === id && id % 1 === 0
                ? pokemonById[id]
                : pokemonByName[id];
  return pokemon || new Error(`${id} was not found in the Pokedex.`);
}
