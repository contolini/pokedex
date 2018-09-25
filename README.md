# pokedex [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![codecov][codecov-image]][codecov-url]

JavaScript encyclopedia of Pokemon with sprites.

![Jigglypuff](http://img.pokemondb.net/sprites/black-white/anim/normal/jigglypuff.gif) ![Gengar](http://img.pokemondb.net/sprites/black-white/anim/normal/gengar.gif) ![Electrode](http://img.pokemondb.net/sprites/black-white/anim/normal/electrode.gif) ![Eevee](http://img.pokemondb.net/sprites/black-white/anim/normal/eevee.gif) ![Snorlax](http://img.pokemondb.net/sprites/black-white/anim/normal/snorlax.gif)

Note: Generation VII species may have missing data including sprites.

## Installation

```sh
$ npm install --save pokedex
```

## Usage

```js
var Pokedex = require('pokedex'),
    pokedex = new Pokedex();

console.log( pokedex.pokemon('garbodor') );
console.log( pokedex.pokemon(90) );
```

```js
{
  id: 569,
  species_id: 569,
  height: 19,
  weight: 1073,
  base_experience: 166,
  order: 617,
  is_default: 1,
  name: 'garbodor',
  sprites: {
    normal: 'http://img.pokemondb.net/sprites/black-white/normal/garbodor.png',
    animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/garbodor.gif'
  }
}
{
  id: 90,
  species_id: 90,
  height: 3,
  weight: 40,
  base_experience: 61,
  order: 103,
  is_default: 1,
  name: 'shellder',
  sprites: {
    normal: 'http://img.pokemondb.net/sprites/black-white/normal/shellder.png',
    animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/shellder.gif'
  }
}
```

## Contributing

Run `npm run parse` to convert the CSVs in `/data` into the JSON file consumed by this library.

## License

MIT © [Chris Contolini](http://contolini.com)

Pokemon data from [Pokeapi](http://pokeapi.co/) BSD © [Paul Hallett](http://phalt.co/)


[npm-image]: https://badge.fury.io/js/pokedex.svg
[npm-url]: https://npmjs.org/package/pokedex
[travis-image]: https://travis-ci.org/contolini/pokedex.svg?branch=master
[travis-url]: https://travis-ci.org/contolini/pokedex
[daviddm-image]: https://david-dm.org/contolini/pokedex.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/contolini/pokedex
[codecov-image]: https://codecov.io/gh/contolini/pokedex/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/contolini/pokedex
