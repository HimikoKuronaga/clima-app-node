const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs')
    .option({
        direccion: {
            alias: 'd',
            desc: 'Direccion de la ciudad para obtener el clima',
            demand: true
        }
    }).argv;


const getInfo = async (direccion) => {
    try {
        const coordenadas = await lugar.getLugarLatLong(argv.direccion);
        const temperatura = await clima.getClima(coordenadas.lat, coordenadas.lng);

        return `El clima de ${coordenadas.direccion} es de ${temperatura}`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(resp => console.log(resp))
    .catch(err => console.log(err));