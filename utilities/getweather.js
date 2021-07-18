const request = require('request');
const getWeather = (lat, lon, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=4c464a7f3a1a06beca868d65ff8a17b9&query=${lat},${lon}`
    request({
        url,
    }, (err, res) => {
        if (err) {
            callback('unable to connect')
        } else {
            const data = JSON.parse(res.body);
            callback(`It is currently ${data.current.temperature} and feels like ${data.current.feelslike}`)
        }

    })
}

module.exports = getWeather;