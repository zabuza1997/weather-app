const request = require('request');
const getGeocode = require('./utilities/getgeocode');
const getWeather = require('./utilities/getweather');
const process = require('process');

const args = process.argv;
const location = args[2];



getGeocode(location, (err, data) => {
    if (err) {
        return console.error(err);
    }
    getWeather(data.lat, data.lon, (err, weatherData) => {
        if (err) {
            return console.error(err);
        }
        console.log(location)
        console.log(weatherData);
    })



})