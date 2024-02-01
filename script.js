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

// Comparaison Operators
console.log (x > y);
console.log ( x <= y);


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