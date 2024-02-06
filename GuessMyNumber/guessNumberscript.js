'use strict';

// Math.random() / To generate Random numbers
// Math.trunc() / To reduce the float numbers
const secretNumber = Math.trunc((Math.random() * 20 + 1));
console.log(secretNumber);

// Get the check btn
document.querySelector('.check').addEventListener('click', function (){
    console.log('Btn check clicked !');
}, false);

document.querySelector('.number').textContent = 20;