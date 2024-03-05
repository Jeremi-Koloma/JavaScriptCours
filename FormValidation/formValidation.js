'use strict';

// ELEMENTS
const btnLogin = document.querySelector('.login');
const inputFirstName = document.querySelector('.firstName');
const inputLastName = document.querySelector('.lastName');
const inputEmail = document.querySelector('.email');
const inputPassword = document.querySelector('.password');
const inputPasswordConfirm = document.querySelector('.passwordConfirm');

const labelErrorFirstName = document.querySelector('.errorFistName');
const labelErrorLastName = document.querySelector('.errorLastName');
const labelErrorEmail = document.querySelector('.errorEmail');
const labelErrorPassword = document.querySelector('.errorPassword');
const labelErrorPasswordConfirm = document.querySelector('.errorPasswordConfirm');


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
        labelErrorFirstName.textContent = `Champs obligatoire !`;
        labelErrorFirstName.style.display = 'block';
    }

    if (lastName === '') {
        inputLastName.style.border = '1px solid red';
        labelErrorLastName.textContent = `Champs obligatoire !`;
        labelErrorLastName.style.display = 'block';
    }

    if (email === '') {
        inputEmail.style.border = '1px solid red';
        labelErrorEmail.textContent = `Champs obligatoire !`;
        labelErrorEmail.style.display = 'block';
    }

    if (password === '') {
        inputPassword.style.border = '1px solid red';
        labelErrorPassword.textContent = `Champs obligatoire !`;
        labelErrorPassword.style.display = 'block';
    }

    if (passwordConfirm === '') {
        inputPasswordConfirm.style.border = '1px solid red';
        labelErrorPasswordConfirm.textContent = `Champs obligatoire !`;
        labelErrorPasswordConfirm.style.display = 'block';
    }

    if (firstName !== '') {
        if (firstName.length < 4) {
            inputFirstName.style.border = '1px solid red';
            labelErrorFirstName.textContent = `Prénom, 04 caractères au minimum !`;
            labelErrorFirstName.style.display = 'block';
        } else {
            inputFirstName.style.border = 'none';
            labelErrorFirstName.style.display = 'none';
        }
    }

    if (lastName !== '') {
        inputLastName.style.border = 'none';
        labelErrorLastName.style.display = 'none';
    }

    if (email !== '') {
        inputEmail.style.border = 'none';
        labelErrorEmail.style.display = 'none';
    }

    if (password !== '') {
        if (password.length < 8) {
            inputPassword.style.border = '1px solid red';
            labelErrorPassword.textContent = `Mot de passe, 08 caractère au minimum !`;
            labelErrorPassword.style.display = 'block';
        } else {
            inputPassword.style.border = 'none';
            labelErrorPassword.style.display = 'none';
        }
    }

    if (passwordConfirm !== '') {
        if (password !== passwordConfirm) {
            inputPasswordConfirm.style.border = '1px solid red';
            labelErrorPasswordConfirm.textContent = `Mots de passe non conforme !`;
        } else {
            inputPasswordConfirm.style.border = 'none';
            labelErrorPasswordConfirm.style.display = 'none';
        }
    }


    // VALIDATION
    if (firstName !== '' && lastName !== '' && email !== '' && password !== '' && passwordConfirm !== '') {
        if (firstName.length >= 4 && password.length >= 8 && password === passwordConfirm) {
            console.log("----- Form Valid ---");
            console.log(firstName);
            console.log(lastName);
            console.log(email);
            console.log(password);
            console.log(passwordConfirm);
        }
    }


}, false);