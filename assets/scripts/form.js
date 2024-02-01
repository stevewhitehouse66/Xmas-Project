// Get the current URL
var currentURL = window.location.href;

// Create a URL object
var urlObject = new URL(currentURL);

// Get the URL query parameters
var searchParams = urlObject.searchParams;

//Store form data
var formData = {};
searchParams.forEach(function(value, key) {
formData[key] = value;
});

//write data to DOM
document.getElementById('fname').innerText = `Name:                  ${formData.fname}`;
document.getElementById('lname').innerText = `Surname:                  ${formData.lname}`;
document.getElementById('phone').innerText = `Phone:                  ${formData.phone}`;
document.getElementById('email').innerText = `Email:                  ${formData.email}`;
document.getElementById('pname').innerText = `Pet's Name:                  ${formData.pname}`;
document.getElementById('date').innerText = `Appoinment Date:                  ${formData.appointment}`;
document.getElementById('time').innerText = `Time:                  ${formData.hour}:${formData.minute}`;