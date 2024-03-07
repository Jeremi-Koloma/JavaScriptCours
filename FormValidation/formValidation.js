'use strict';

// ELEMENTS
const btnLogin = document.querySelector('.login');
const inputFirstName = document.querySelector('.firstName');
const inputLastName = document.querySelector('.lastName');
const inputEmail = document.querySelector('.email');
const inputPassword = document.querySelector('.password');
const inputPasswordConfirm = document.querySelector('.passwordConfirm');

const labelErrorFirstName = function (message) {
    document.querySelector('.errorFistName').textContent = message;
}
const labelErrorFirstNameStyleDisplay = function (style) {
    document.querySelector('.errorFistName').style.display = style;
}

const labelErrorLastName = function (message) {
    document.querySelector('.errorLastName').textContent = message;
}
const labelErrorLastNameStyleDisplay = function (style) {
    document.querySelector('.errorLastName').style.display = style;
}
const labelErrorPassword = function (message) {
    document.querySelector('.errorPassword').textContent = message;
}
const labelErrorPasswordStyleDisplay = function (style) {
    document.querySelector('.errorPassword').style.display = style;
}
const labelErrorEmail = function (message) {
    document.querySelector('.errorEmail').textContent = message;
}
const labelErrorEmailStyleDisplay = function (style) {
    document.querySelector('.errorEmail').style.display = style;
}
const labelErrorPasswordConfirm = function (message) {
    document.querySelector('.errorPasswordConfirm').textContent = message;
}
const labelErrorPasswordConfirmStyleDisplay = function (style) {
    document.querySelector('.errorPasswordConfirm').style.display = style;
}
const successMessageStyleDisplay = function (style) {
    document.querySelector('.successMessage').style.display = style;
}

// Get the login btn
btnLogin.addEventListener('click', function (e) {
    // PREVENT FORM
    e.preventDefault();
    const firstName = inputFirstName.value;
    const lastName = inputLastName.value;
    const email = inputEmail.value;
    const password = inputPassword.value;
    const passwordConfirm = inputPasswordConfirm.value;
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const inputFirstNameBorder = function (border) {
        inputFirstName.style.border = border;
    }
    const inputLastNameBorder = function (border) {
        inputLastName.style.border = border;
    }
    const inputPasswordBorder = function (border) {
        inputPassword.style.border = border;
    }
    const inputEmailBorder = function (border) {
        inputEmail.style.border = border;
    }
    const inputPasswordConfirmBorder = function (border) {
        inputPasswordConfirm.style.border = border;
    }

    const ValidateEmail = function (email) {
        if (email.match(validRegex)) {
            inputEmailBorder('1px solid #37BA74');
            labelErrorEmailStyleDisplay('none');
            return true;
        } else {
            inputEmailBorder('1px solid red');
            labelErrorEmail(`Adresse email invalide !`);
            labelErrorEmailStyleDisplay('block');
            return false;
        }
    }


    if (firstName === '') {
        inputFirstNameBorder('1px solid red');
        labelErrorFirstName(`Champs obligatoire !`);
        labelErrorFirstNameStyleDisplay('block');
    }

    if (lastName === '') {
        inputLastNameBorder('1px solid red');
        labelErrorLastName(`Champs obligatoire !`);
        labelErrorLastNameStyleDisplay('block');
    }

    if (email === '') {
        inputEmailBorder('1px solid red');
        labelErrorEmail(`Champs obligatoire !`);
        labelErrorEmailStyleDisplay('block');
    }

    if (password === '') {
        inputPasswordBorder('1px solid red');
        labelErrorPassword(`Champs obligatoire !`);
        labelErrorPasswordStyleDisplay('block');
    }

    if (passwordConfirm === '') {
        inputPasswordConfirmBorder('1px solid red');
        labelErrorPasswordConfirm(`Champs obligatoire !`);
        labelErrorPasswordConfirmStyleDisplay('block');
    }

    if (firstName !== '') {
        if (firstName.length < 4) {
            inputFirstNameBorder('1px solid red');
            labelErrorFirstName(`Prénom, 04 caractères au minimum !`);
            labelErrorFirstNameStyleDisplay('block');
        } else {
            inputFirstNameBorder('1px solid #37BA74');
            labelErrorFirstNameStyleDisplay('none');
        }
    }

    if (lastName !== '') {
        inputLastNameBorder('1px solid #37BA74');
        labelErrorLastNameStyleDisplay('none');
    }

    if (email !== '') {
        ValidateEmail(email);
    }

    if (password !== '') {
        if (password.length < 8) {
            inputPasswordBorder('1px solid red');
            labelErrorPassword(`Mot de passe, 08 caractère au minimum !`);
            labelErrorPasswordStyleDisplay('block');
        } else {
            inputPasswordBorder('1px solid #37BA74');
            labelErrorPasswordStyleDisplay('none');
        }
    }

    if (passwordConfirm !== '') {
        if (password !== passwordConfirm) {
            inputPasswordConfirmBorder('1px solid red');
            labelErrorPasswordConfirm(`Mots de passe non conforme !`);
        } else {
            inputPasswordConfirmBorder('1px solid #37BA74');
            labelErrorPasswordConfirmStyleDisplay('none');
        }
    }


    // VALIDATION
    if (firstName !== '' && lastName !== '' && email !== '' && password !== '' && passwordConfirm !== '') {
        if (firstName.length >= 4 && email.match(validRegex) && password.length >= 8 && password === passwordConfirm) {
            console.log("----- Form Valid ---");
            console.log(firstName);
            console.log(lastName);
            console.log(email);
            console.log(password);
            console.log(passwordConfirm);
            successMessageStyleDisplay('block');
            // CLEAN THE INPUT FIELDS
            inputFirstName.value = '';
            inputFirstNameBorder('none');
            inputLastName.value = '';
            inputLastNameBorder('none');
            inputEmail.value = '';
            inputEmailBorder('none');
            inputPassword.value = '';
            inputPasswordBorder('none');
            inputPasswordConfirm.value = '';
            inputPasswordConfirmBorder('none');
            // HIDE THE SUCCES MESSAGE
            setTimeout(() => {
                successMessageStyleDisplay('none');
            }, "4000");
        }
    }


}, false);