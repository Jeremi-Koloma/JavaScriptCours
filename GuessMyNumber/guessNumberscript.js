'use strict';

// Math.random() / To generate Random numbers
// Math.trunc() / To reduce the float numbers to int
const secretNumber = Math.trunc((Math.random() * 20 + 1));
console.log(secretNumber);

// Get the check btn
document.querySelector('.check').addEventListener('click', function () {
    let guessValue = Number(document.querySelector('.guess').value);

    // Check if the user get then secret number
    if (guessValue === secretNumber) {
        document.querySelector('.message').textContent = "Congratulations !";
    }
    //  Check if the input value guessing is greater then secret number
    else if (guessValue > secretNumber) {
        document.querySelector('.message').textContent = 'To hight !';
    }
    // Check if the input value guessing is lower then secret number
    else if (guessValue < secretNumber) {
        document.querySelector('.message').textContent = 'To low !';
    }




}, false);

document.querySelector('.number').textContent = secretNumber;