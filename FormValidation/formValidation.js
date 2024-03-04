'use strict';

// VARIABLES
const btnLogin = document.querySelector('.login');
const inputFirstName = document.querySelector('.firstName');
const inputLastName = document.querySelector('.lastName');
const inputEmail = document.querySelector('.email');
const inputPassword = document.querySelector('.password');
const inputPasswordConfirm = document.querySelector('.passwordConfirm');

// Get the login btn
btnLogin.addEventListener('click', function (e) {
    // PREVENT FORM
    e.preventDefault();
    const firstName = inputFirstName.value;
    const lastName = inputLastName.value;
    const email = inputEmail.value;
    const password = inputPassword.value;
    const passwordConfirm = inputPasswordConfirm.value;

    if (firstName === '') {
        inputFirstName.style.border = '1px solid red';
    }

    if (lastName === '') {
        inputLastName.style.border = '1px solid red';
    }

    if (email === '') {
        inputEmail.style.border = '1px solid red';
    }

    if (password === '') {
        inputPassword.style.border = '1px solid red';
    }

    if (passwordConfirm === '') {
        inputPasswordConfirm.style.border = '1px solid red';
    }

}, false);