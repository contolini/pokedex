import assert from 'assert';
import Pokedex from '../lib';
const pokedex = new Pokedex();

describe('pokedex', function () {
  it('should query pokemon by name', function () {
    assert(pokedex.pokemon('bulbasaur').weight === 69, 'check bulbasaur\'s weight.');
    assert(pokedex.pokemon('kakuna').order === 18, 'check kakuna\'s order.');
    assert(pokedex.pokemon('bayleef').base_experience === 142, 'check bayleef\'s base experience.');
  });
  it('should query pokemon by id', function () {
    assert(pokedex.pokemon(1).weight === 69, 'check bulbasaur\'s weight.');
    assert(pokedex.pokemon(14).order === 18, 'check kakuna\'s order.');
    assert(pokedex.pokemon(153).base_experience === 142, 'check bayleef\'s base experience.');
  });
});
