//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!
// const request = require('request');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const getTodos = (callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            callback(undefined, request.responseText);
        } else if (request.readyState === 4) {
            callback('couldnt fetch', undefined);
        }
    });
    request.open('GET', 'http://jsonplaceholder.typicode.com/userss');
    request.send();
};
console.log('1');
console.log('2');

getTodos((err, data) => {
    if (err) {
        return console.error(err);
    }
    console.log(data);
});
console.log('3');
console.log('4');