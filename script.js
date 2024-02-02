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


/* ********************************* ARRAY ****** **********
 Function declaration - Function expression - Arrow function
 *********************************************************** */
 const friends = ["Michée", "Job", "David"];
 console.log(friends);
 // Access the first element in Array
 console.log(friends[0]);
 // Get the numbers of array items
 console.log(friends.length);
 // Get the last element in the array
 console.log(friends[friends.length - 1]);
 // Replace an element in Array
 friends[1] = "Adama";
 console.log(friends);


 const years = new Array(1990, 1991, 1992, 1993);
 console.log(years);