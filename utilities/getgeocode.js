const request = require('request');
const getGeocode = (location, callback) => {
    const url = `http://www.mapquestapi.com/geocoding/v1/address?key=XZafmJh4uwHHy4rUXqANcedumfYAGpwp&location=${location}`
    request({
        url,
    }, (err, res) => {
        if (err) {
            callback('Unable to connect');
        } else {
            const data = JSON.parse(res.body);
            callback(undefined, {
                lat: data.results[0].locations[1].latLng.lat,
                lon: data.results[0].locations[1].latLng.lng
            })
            // console.log(`Lat: ${lat}, Lon: ${lon}`);
        }
    })
}

module.exports = getGeocode;