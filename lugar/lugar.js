const axios = require('axios');

const getLugarLatLong = async (dir) => {
    const encodeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'x-rapidapi-key': '5ad16772c4msh8887ca77cb7535ap1ea41djsn8e4a305d8892' }
    });

    const respuesta = await instance.get();

    if (respuesta.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${encodeUrl}`);
    }

    const data = respuesta.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;
    
    return { direccion, lat, lng };
}

module.exports = {
    getLugarLatLong,
}