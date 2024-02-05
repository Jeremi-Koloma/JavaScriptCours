'use strict';

/* *************************** VARIABLES DÉCLARATION **********
let - const - var
 *********************************************************** */
// Declaration
let myVariable;
// Assigment
myVariable = "Hello !";


// Declaration
var job;
// Assigment
job = "Developper";

// immutable variable
const birthday = 1980;



/* ************************************** DATA TYPES **********
Numer - String - Boolean - Undefined - Null - Symbol -BigInt
 *********************************************************** */
// Number
let age = 10;
console.log(age, typeof age);

// String
let firstName = "Jeremi";
console.log(firstName, typeof firstName);

// Boolean
let isLoggin = true;
console.log(isLoggin, typeof isLoggin);

// Undefined
let card;
console.log(card, typeof card);



/* ********************************* BASIC OPERATORS **********
+, -, =, <, ...
 *********************************************************** */
// Arithmetic Operators
const jeremiAge = 2090 - 1990;
console.log(jeremiAge);

let x = 10, y = 2;
console.log(x + y);
console.log(x * y);
console.log(x / y);
console.log(x ** y);

// Increment
y++;

// Decrement
y--;

// Comparaison Operators
console.log(x > y);
console.log(x <= y);

// Logical operators
const hasDrivingLicence = true;
const hasGoodVision = false;
console.log(hasDrivingLicence && hasGoodVision);
console.log(hasDrivingLicence && !hasGoodVision);
console.log(10 > 5 && 20 < 30);
console.log(2 >= 2 || 2 < 6);


/* ********************************* STRINGS ****** **********
 Regular string - Bactic string - Multilines string
 *********************************************************** */
// single quote string
let singQuote = 'Just a single quotre string !';

// Double quote string
console.log("My name is: " + firstName + " a " + jeremiAge + " year old");

// Teamplate literal
const jeremi = `I'm ${firstName}, a ${jeremiAge} year old ${job} `;
console.log(jeremi);

// scape caractor
console.log('I\'m Jeremi');

// multiple line with double quote
console.log("sting with \n\
multiples \n\
lines \
");

// template string mutiple line
console.log(`seconde string
with template string
multiple line
`);


/* ********************************* FUNCTIONS ****** **********
 Function declaration - Function expression - Arrow function
 *********************************************************** */

// function declaration
function logger() {
      console.log('Just a logger function');
}
// calling / running / invoking the function
logger();

// function declaration with parametters 
function fruitPocessor(apples, oranges) {
      const juice = `Hello ! I want juice with ${apples} apples and ${oranges} oranges.`;
      return juice;
}
const appleJuice = fruitPocessor(3, 9);
console.log(appleJuice);


// Function Expression
const calculAge = function (birthYear) {
      return 2024 - birthYear;
}
const myAge = calculAge(1990);
console.log(myAge);


// Arrow function
const calcAge2 = birthYear => 2027 - birthYear;
const captCalcAge2 = calcAge2(1996);
console.log(captCalcAge2);

// Arrow function with multiples parametters
const untilRetirement = (birthYear, firstName) => {
      const age = 2024 - birthYear;
      const retirement = 65 - age;
      return `${firstName} you'll be retiring in ${retirement} years`;
}
const captRetirementAge = untilRetirement(1991, 'Jeremi');
const captRetirementAge2 = untilRetirement(1970, 'Moussa');
console.log(captRetirementAge);
console.log(captRetirementAge2);

// first Function
function cutFruitPieces(fruit) {
      return fruit * 4;
};

function fruitPocessor(apples, oranges) {
      // Calling function inside other function
      const applePices = cutFruitPieces(apples);
      const orangePices = cutFruitPieces(oranges);
      const juice = `Hello ! I want juice with ${applePices} apple of pices ${orangePices} orange of pices.`;
      return juice;
}
const captFruitProcessor = fruitPocessor(3, 9);
console.log(captFruitProcessor);

// OTHER EXAMPLES

// Function declaration
function workingDayProcessor(hours, days) {
      return `Jeremi work ${hours} hours, ${days} days a week.`;
}
const workingDay = workingDayProcessor(8, 5);
console.log(workingDay);


// Function Expression
const readingProcessor = function (hours, times) {
      return `Jeremi read for ${hours} hours, ${times} times a week`;
}
const reading = readingProcessor(2, 4);
console.log(reading);


// Arrow function
const expenses = expenses => 20000 - expenses;
const expense = expenses(5000);
console.log(expense);

/* ********************************* ARRAY ****** **********
 *********************************************************** */
const friends = ["Michée", "Job", "David"];
console.log(friends);

const years = new Array(1990, 1991, 1992, 1993);
console.log(years);

// Access the first element in Array
console.log(friends[0]);
// Get the numbers of array items
console.log(friends.length);
// Get the last element in the array
console.log(friends[friends.length - 1]);
// Replace an element in Array
friends[1] = "Adama";
console.log(friends);
// Add element in the end of the Array
friends.push('Bob');
console.log(friends);
// Add element to the beganing of the Array
friends.unshift("Hamidou");
console.log(friends);
// Remove the last element in an Array
friends.pop();
console.log(friends);
// Remove the first element in an array
friends.shift();
console.log(friends);
// Get the index of an element in an array
console.log(friends.indexOf('Adama'));
// Check if an element exist in array
console.log(friends.includes('Michée'));
console.log(friends.includes('Aly'));


/* ********************************* OBJECT ****** **********
 *********************************************************** */
const ballo = {
      firstName: 'Ibrahim',
      lastName: 'BALLO',
      job: 'Programmer',
      age: 2024 - 1997,
      friend: ['Genika', 'Mariam', 'Kalifa']
}

console.log(ballo);
// Acces to an object property
console.log(ballo.firstName);
console.log(ballo['lastName']);
//Difference between bracket vs Dot notation
//const interessted = prompt("What do you want to know about Ballo ? Job - age - friend");
//console.log(ballo[interessted]);
// Add a new property in an object
ballo.location = 'Bamako-coura';
ballo['phone'] = '12345678';
console.log(ballo);
const balloString = `${ballo.firstName} has ${ballo.friend.length} friends, and his best friend is: ${ballo.friend[0]}`;
console.log(balloString);


/* ********************************* FOR LOOP ****** **********
 *********************************************************** */
for (let i = 1; i < 10; i++) {
      console.log(`JavaScrip is jan: ${i}`);
}

const jobfriends = ['Genika', 'Mariam', 'Kalifa', 'David', 'Gabi'];
const alyFriends = [];
for (let i = 0; i < jobfriends.length; i++) {
      console.log(jobfriends[i]);
      // first way to fill an empty array
      alyFriends[i] = jobfriends[i];
      // Second way 
      alyFriends.push(jobfriends[i]);
}

console.log(alyFriends);

// Decrement
for (let i = jobfriends.length - 1; i >= 0; i--) {
      console.log(i, jobfriends[i]);
}

/* ********************************* WHILE LOOP ****** **********
 *********************************************************** */
let rep = 1;

while (rep <= 5) {
      console.log(`WHILE: running ${rep} time`);
      rep++;
}