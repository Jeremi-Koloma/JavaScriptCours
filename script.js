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
let age = 10 ;
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
console.log(x/y);
console.log(x**y);

// Increment
y++;

// Decrement
y--;

// Comparaison Operators
console.log (x > y);
console.log ( x <= y);

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
 console.log("My name is: " + firstName+ " a "+ jeremiAge+ " year old");

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
 Function decralation - Function expression
 *********************************************************** */

function logger(){
      console.log('Just a logger function');
}
// calling function logger
logger();