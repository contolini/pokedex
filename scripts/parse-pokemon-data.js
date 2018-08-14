const fs = require('fs');

const pathToCsv = './data/csv/pokemon.csv';
const csv = require('csvtojson');


csv().fromFile(pathToCsv).subscribe((resultRow) => {
    var name = resultRow.identifier;
    delete resultRow.identifier;
    resultRow.name = name;
    if (resultRow.species_id < 650) {
        resultRow.sprites = {
            normal: 'http://img.pokemondb.net/sprites/black-white/normal/' + name + '.png',
            animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/' + name + '.gif'
        };
    } else {
        resultRow.sprites = {
            normal: 'http://img.pokemondb.net/sprites/x-y/normal/' + name + '.png'
        };
    }
})
.then(obj => {
    console.log('Writing pokemon data...');
    return new Promise((resolve, reject) => {
        fs.writeFile('./lib/pokemon.json', JSON.stringify(obj), (error) => {
            if (error) {
                reject(error);
            } else {
                resolve('File created');
            }
        })
    });
})
.then(result => {
    return console.log(result);
})
.catch(error => {
    return console.error(error);
})