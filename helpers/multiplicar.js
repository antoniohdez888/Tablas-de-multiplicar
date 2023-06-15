const fs = require('fs');
const colors = require('colors');

//* promesa
// const crearArchivo = ( base = 5 ) => {

//     return new Promise( (resolve, reject) => {

//         console.log('=====================');
//         console.log(`   Tabla del `, base);
//         console.log('=====================');
        
//         let salida = '';
    
//         for (let i = 1; i <= 10 ; i++) {
//             salida +=  `${base} x ${i} = ${i*base}\n` ;
            
//         }
    
//         console.log(salida);
    
//         fs.writeFileSync( `tabla-${base}.txt`, salida );
        
//         resolve(`tabla-${base}.txt creado`);

//     });

// };

//* async function
const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {

    try {

        
        let salida = '', consola = '';
        
        for (let i = 1; i <= hasta ; i++) {
            salida +=  `${base} x ${i} = ${i*base}\n` ;
            consola +=  `${base} ${'x'.magenta} ${i} ${'='.magenta} ${i*base}\n` ;
            
        }
        
        if( listar ){
            
            console.log('====================='.yellow);
            console.log(`   Tabla del `.yellow, colors.blue(base) );
            console.log('====================='.yellow);
            console.log(consola);

        }
    
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida );
        
        return (`tabla-${base}.txt `);
        
    } catch (error) {
        throw error;
    }


}

module.exports = {
    crearArchivo
}