const submitBtn = document.getElementById('submit');
const weatherForm = document.querySelector('form');
const address = document.getElementById("address");
const messageOne = document.querySelector('.message-one');
const messageTwo = document.querySelector('.message-two');

weatherForm.addEventListener('submit', e => {
    e.preventDefault();
    console.log('SUBMITTED');
    var addressValue = address.value;
    // doSearch(addressValue);
    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';
    fetch('http://localhost:3000/weather?address=' + addressValue).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.innerHTML = data.error;
                messageTwo.innerHTML = '';
            } else {
                messageOne.textContent = data.location;
                messageTwo.textContent = data.forecast;
            }
        })
    })
})

// function doSearch(addressValue) {
//     window.location = "http://localhost:3000/weather?address=" + encodeURIComponent(addressValue);
//     return false; // not entirely necessary, but just in case
// }