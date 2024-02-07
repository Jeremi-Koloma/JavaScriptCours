'use strict';

// Math.random() / To generate Random numbers
// Math.trunc() / To reduce the float numbers to int
let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);

// The score value
let score = 20;
// Keep the hight score
let hightScore = 0;

function displayMessage (message) {
    document.querySelector('.message').textContent = message;
}

// Get the check btn
document.querySelector('.check').addEventListener('click', function () {
    let guessValue = Number(document.querySelector('.guess').value);

    // Check if the user have put an number
    if (!guessValue) {
        displayMessage("No input Number !");
    }
    // Check if the user get then secret number
    else if (guessValue === secretNumber) {
        displayMessage("Congratulations !");
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('body').style.backgroundColor = '#60b347';
        // check the hightScore
        if (score > hightScore) {
            hightScore = score;
            document.querySelector('.highscore').textContent = hightScore;
        }
    } 
    // If the guess value is different then secret number
    else if(guessValue !== secretNumber){
         // Play until the score is greater then 0
         if (score > 1) {
            document.querySelector('.message').textContent = guessValue > secretNumber ? 'To hight !' : 'To low !';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('Game Over !');
            document.querySelector('.score').textContent = 0;
        }
    }



}, false);




// Restart All things
document.querySelector('.again').addEventListener('click', function () {
    // Restore a new secret number
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    // Restore the message
    displayMessage('Start guessing...');
    // Restore the input value
    document.querySelector('.guess').value = '';
    // Restore the backgroundColor
    document.querySelector('body').style.backgroundColor = '#222';
    // Restore the question
    document.querySelector('.number').textContent = '?';
    // Restore the score
    document.querySelector('.score').textContent = score;
    // Restore the width of number
    document.querySelector('.number').style.width = '15rem';
}, false);