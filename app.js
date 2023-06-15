const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./yargs/yargs');

console.clear();

// const [ , , arg3 = 'base=5'] = process.argv;
// const [ , base = 5 ] = arg3.split('=');
// const base = 2;

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'.green) )
    .catch( err => console.log(err));