'use strict';

// Get email
const firstName = document.querySelector('.firstName').value;

// Get the login btn
document.querySelector('.login').addEventListener('click', function (){
    console.log(firstName);
}, false);