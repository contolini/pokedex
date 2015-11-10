import fs from 'fs';

const pokemon = JSON.parse(fs.readFileSync('../data/pokemon.js', 'utf8'));

export default function(id) {
  return pokemon[id];
}
