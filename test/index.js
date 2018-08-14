const assert = require('assert');
const Pokedex = require('../lib/index.js');
const pokedex = new Pokedex();

describe('pokedex', function () {
  it('should query all pokemon', function() {
    assert.notEqual(pokedex.pokemon().length, 0);
  });
  it('should query pokemon by name', function () {
    assert.equal(pokedex.pokemon('garbodor').id, 569);
    assert.equal(pokedex.pokemon('bulbasaur').weight, 69);
    assert.equal(pokedex.pokemon('kakuna').order, 18);
    assert.equal(pokedex.pokemon('bayleef').base_experience, 142);
  });
  it('should query pokemon by id', function () {
    assert.equal(pokedex.pokemon(90).name, 'shellder');
    assert.equal(pokedex.pokemon(1).weight, 69);
    assert.equal(pokedex.pokemon(14).order, 18);
    assert.equal(pokedex.pokemon(153).base_experience, 142);
  });
  it('should have gen vii pokemon', function () {
    assert.equal(pokedex.pokemon('blacephalon').id, 806);
    assert.equal(pokedex.pokemon(805).name, 'stakataka');
  });
});
