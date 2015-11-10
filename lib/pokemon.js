import fs from 'fs';
import path from 'path';

const pokemon = JSON.parse(fs.readFileSync(path.join(__dirname, 'pokemon.json'), 'utf8'));

export default function(id) {
  return pokemon[id];
}
