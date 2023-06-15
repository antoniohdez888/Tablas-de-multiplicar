const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    description: 'Base para tabla de multiplicar',
                    demandOption: true,
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    description: 'Muestra la tabla en consola',
                    default: false,
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    description: 'Limite para tabla de multiplicar',
                    default: 10
                })
                .check( (argv, options) => {
                    if( isNaN( argv.b ) || isNaN( argv.h ) ){
                        throw 'La base tiene que ser un número'
                    }
                    return true
                })
                .argv;

module.exports = argv;