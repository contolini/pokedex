var fs = require('fs'),
    rs = fs.createReadStream('./data/csv/pokemon.csv'),
    Converter = require('csvtojson').Converter,
    converter = new Converter({});

var pokemon = {};

converter.on('end_parsed', function() {
  fs.writeFile('./dist/pokemon.json', JSON.stringify(pokemon));
});

converter.on('record_parsed', function(resultRow, rawRow, rowIndex) {
  var name = resultRow.identifier;
  delete resultRow.identifier;
  resultRow.name = name;
  resultRow.sprites = {
    normal: 'http://img.pokemondb.net/sprites/black-white/anim/normal/' + name + '.png',
    animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/' + name + '.gif'
  };
  pokemon[name] = resultRow;
});

rs.pipe(converter);
