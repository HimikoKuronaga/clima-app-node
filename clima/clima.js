const axios = require('axios');

const api_key = "6318504f1244b184f8249f6bc4c33054";
const url_base_weather = 'http://api.openweathermap.org/data/2.5/weather';
const units = 'metric';
const getClima = async(lat, lon) =>{
    const url = `${url_base_weather}?lat=${lat}&lon=${lon}&appid=${api_key}&units=${units}`;
    const resp = await axios.get(url);
    
    return resp.data.main.temp;
}

module.exports = {
    getClima,
}