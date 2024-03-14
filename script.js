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


/* ********************************* DESTRUCTURING ARRAY ****** **********
 *********************************************************** */

const restaurant = {
      name: 'Glamour+',
      location: 'Bacodjicoroni, street 201,',
      categories: ['Italian', 'Pizza', 'Vegetariam'],
      starterMenu: ['Salad', 'Juice', 'Fruite'],
      mainMenu: ['Rice', 'Humburger', 'Fuit'],
      order: function (starterIndex, mainIndex) {
            return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
      },
      orderCoffe: function (ing1, ing2, ing3) {
            return `I want a coffe with ${ing1}, ${ing2} and ${ing3}`;
      }
};


let [main, second] = restaurant.categories;
console.log(main, second);

const [starter, mainCours] = restaurant.order(0, 2);
console.log(starter, mainCours);

const DestructArray = [10, 20, 30, 40];
const [a, b, c, d] = DestructArray;
console.log(a, b, c, d);

const myArr = [2, 8, [1, 4]];
let [o, , e] = myArr;
console.log(o, e);
let [p, , [, r]] = myArr;
console.log(p, r);


/* ********************************* DESTRUCTURING OBJECT ****** **********
 *********************************************************** */

// Destructurning with the same properties name
const { name, categories } = restaurant;
console.log(name, categories);

// Destructuring with custom properties name
const { name: restaurantName, categories: restaurantCategories } = restaurant;
console.log(restaurantName, restaurantCategories);

// Set default values to our properties
const { menu = ['menu1'], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);


/* ********************************* SPREAD OPÉRATOR ****** **********
 *********************************************************** */

const arrY = [1, 2, 3, 4, 5];
const newArray = ['Alou', 'Bedy', ...arrY];
console.log(newArray);


// calling function parameters by spread operator
const ingredients = ['Sugar', 'Lipton', 'Citron'];
const myCoffe = restaurant.orderCoffe(...ingredients);
console.log(myCoffe);

// copy an object
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Chicha Housse';
console.log(restaurant.name, restaurantCopy.name);


/* ********************************* SHORT CIRCUITING ****** **********
      || - && - Nullish
 *********************************************************** */

// short circuiting with or
console.log(3 || 'Holla');
console.log('' || 'Mali');
console.log('' || 0 || undefined || true);
console.log(undefined || null);

const RestaurantContat = restaurant.contact || '1234567';
const RestaurantConta2 = restaurant.contact ? restaurant.contact : '90229112';
console.log(RestaurantContat);
console.log(RestaurantConta2);

// short circuiting &&
console.log(6 && 'bola');
console.log(0 && 'bola');
console.log(true && 'bola' && 1 && 3 && 0 && true);

// Nullish : Null or undefined (Not 0)
restaurant.street = 0;
const restStree = restaurant.street ?? '202';
console.log(restStree);


/* ********************************* LOOPING ARRAY ****** **********
 *********************************************************** */

const restoMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(restoMenu);

for (const item of restoMenu) console.log(item);

for (const [item, elem] of restoMenu.entries()) console.log(`${item}: ${elem}`);

const openingHours = {
      Mon: {
            open: '09:00',
            close: '00:00'
      },
      Thu: {
            open: '10:00',
            close: '00:00'
      },
      Fri: {
            open: '12:00',
            close: '00:00'
      },
      Sun: {
            open: '14:00',
            close: '00:00'
      }
};

console.log(openingHours);

const openingHoursKey = Object.keys(openingHours);
console.log(openingHoursKey);

const openingHoursValues = Object.values(openingHours);
console.log(openingHoursValues);

const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, { open, close }] of entries) console.log(`On ${day}, we are open at ${open} and close at ${close}`);


/* ********************************* SET ****** **********
 *********************************************************** */

// Set / No dupliced value
const orderSet = new Set(['Pizza', 'Pomme', 'Annanas', 'Couscouss', 'Pizza', 'Pomme', 'Annanas', 'Couscouss']);
console.log(orderSet);
const setJeremi = new Set('Jeremi');
console.log(setJeremi);

console.log(orderSet.size);
// Add element in a set
orderSet.add('Tomate');
orderSet.add('Tomate');
console.log(orderSet);
// check if an element exist in set
console.log(orderSet.has('Pomme'));
// Remouve an element in set
orderSet.delete('Couscouss');
console.log(orderSet);
// Delete all element in set
setJeremi.clear();
console.log(setJeremi);
for (const i of orderSet) console.log(i);

const team = ['Manager', 'Programmer', 'Director', 'RH', 'Developper', 'Manager', 'Programmer', 'Secretaire', 'Manager'];
console.log(team);
// convert array to set
const teamUnique = new Set(team);
console.log(teamUnique);
// Get a Set array
const teamUniqueArray = [...new Set(team)];
console.log(teamUniqueArray);
(you) => console.log(`Jesus loves ${you}`);

/* ********************************* MAP ****** **********
 *********************************************************** */

const restMap = new Map();
// Add elements in Map
restMap.set('name', 'Chiken Bluse')
      .set('location', 'Hamdallaye ACI')
      .set('manager', 'Mimy')
      .set('coffe', [1, 3, 4])
      .set('menu', ['Macaroni', 'Spaghetti', 'Salade', 'Haricot']);

console.log(restMap);

// Get element in Map
console.log(restMap.get('name'));
console.log(restMap.get('menu'));
// check if an element existe in Map
console.log(restMap.has('location'));
// Remouve an element in Map
restMap.delete('coffe');
console.log(restMap);
// Remouve all Elements in Map
restMap.clear();
console.log(restMap);

// Other way to declare a Map
const question = new Map([
      ['question', 'What is the best programming language in the world ?'],
      [1, 'C'],
      [3, 'Java'],
      [4, 'Python'],
      [true, 'Correct answer'],
      [false, 'Wrong']
]);

console.log(question);

console.log(question.get('question'));
for (const [key, value] of question) {
      if (typeof key === 'number') console.log(`Answers ${key}: ${value}`);
}

// convert Map to Array
const mapToArray = [...question];
console.log(mapToArray);

for (const [arrKey, arrValue] of mapToArray) console.log(arrKey, arrValue);


/* ********************************* STRING ****** **********
 *********************************************************** */

const airline = 'Sky Mali to kaye';
const plane = 'B3EZ12';

console.log(plane[0]);
console.log(plane[2]);
console.log(plane[3]);
console.log(airline.length);
// Get the position of fist ('K)
console.log(airline.indexOf('k'));
// Get the position of last ('K')
console.log(airline.lastIndexOf('k'));
// The string start at position (4)
console.log(airline.slice(4));
console.log(airline.toLocaleLowerCase());
console.log(airline.toUpperCase());

const email = "  example@gmail.com";
console.log(email);
// Delete the white space
const timEmail = email.trim().trimEnd();
console.log(timEmail);
console.log(timEmail.includes('@'));
console.log(plane.padStart(10, '+'));
console.log(plane.padEnd(15, '+'));
console.log(plane.padStart(25, '+').padEnd(25, '+'));

const mastCreditCard = function (number) {
      const str = number + '';
      // Get the last 4 caracters
      const lastCardNumber = str.slice(-4);
      return lastCardNumber.padStart(str.length, '*');
}

console.log(mastCreditCard(77908432));
console.log(mastCreditCard(937908432033));


/* ********************************* DEFAULT PARAMETERS FUNCTION ****** **********
 *********************************************************** */

const books = [];

const booking = function (author = 'Jeremi', title = 'I am a title', yaer = 1990) {
      const aBook = {
            author,
            title,
            yaer
      }
      console.log(aBook);
      console.log(books.push(aBook));
};

booking('Robert');
booking();
booking('Aly', 'Aly book title');
booking('Moussa', 'Moise book title', 2020);

const upperFirstWord = function (str) {
      const [fistWord, ...others] = str.split(' ');
      return [fistWord.toUpperCase(), ...others].join(' ');
};

// Higer other function
const transformer = function (strn, fnct) {
      console.log(`Original string :${strn}`);
      console.log(`Transformed string :${fnct(strn)}`);
};

transformer('JavaScript is the best language', upperFirstWord);


/* ********************************* IMEDIATELY INVOKE FUNCTION EXPRESSION ****** **********
 *********************************************************** */

// Funtion expression (IIFE)
(function () {
      console.log('This function will never run again !');
})();

// Arrow Function Run Once (IIFE)
(() => console.log('Again this Arrow function will never run agin'))();



/* ********************************* ARRAYS METHODES ****** **********
      SLICE - SPLICE - REVERSE - CONCAT - JOIN
 *********************************************************** */

// SLICE / IMMUTABLE
console.log('---- SLICE ------');
const tableArr = ['A', 'B', 'C', 'd', 'e', 'f', 'g'];
console.log(tableArr);
// Start at the position "2" without changes the original array
console.log(tableArr.slice(2));
// Get the "2" last elements in the array
console.log(tableArr.slice(-2));
// Get the last element int array
console.log(tableArr.slice(-1));

// SPLICE / MUTABLE
console.log('---- SPLICE ------');
// start at the position "2" but deletes the "0", "1" element in the original Array
console.log(tableArr.splice(2));
console.log(tableArr);

// REVERSE / MUTABLE
console.log('---- REVERSE ------');
const tableArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(tableArr2);
// revese the array but it makes changes from the origin array
console.log(tableArr2.reverse());
console.log(tableArr2);

// CONCAT / IMMUTABLE
console.log('---- CONCAT ------');
console.log(tableArr.concat(tableArr2));
// Other way spread operator
console.log([...tableArr, ...tableArr2]);

// JOIN / MUTABLE
console.log('---- JOIN ------');
console.log(tableArr.join('-'));
console.log(tableArr2.join('+'));


/* ********************************* FOREACH ****** **********
 *********************************************************** */
// forEach
tableArr2.forEach(function (i) {
      i > 5 ? console.log(`i:${i} is greater then 5`) : console.log(`i:${i} is less then 5`);
});

tableArr.forEach(function (item) {
      console.log(item);
});

// Get the current element with ForLoop
for ( const elem of tableArr2){
      console.log(elem);
}
// Get the current index and the element it-self in ForLoop
console.log('------- Current index and Element forLoop --------');
for(const [item, elem] of tableArr2.entries()) {
      console.log(`Item:${item+1} have the element :${elem}`);
}

// Get the current index in forEach
console.log('------- Current index and Element forEach --------');
tableArr2.forEach(function(elem, index){
      console.log(`Item:${index+1} have the element :${elem}`);
});


// forEach in Map
const loopMap = new Map([
      ['US', 'United State'],
      ['FR', 'Français'],
      ['ML', 'Mali'],
      ['BF', 'Burkina Fasso']
]);
console.log(loopMap);

loopMap.forEach(function (key, value, map){
      console.log(`Key: ${key} Value: ${value}`);
});


// forEach in Set
const setLoop = new Set(['Us', 'Ml', 'Fr', 'Al', 'Us', 'Ml', 'Co']);
console.log(setLoop);

setLoop.forEach(function (value){
      console.log(value);
});


/* ********************************* FLAT ****** **********
 *********************************************************** */
const arrFlat = [[1,2,3], [0,8,2], 9,3];
console.log(arrFlat);
console.log(arrFlat.flat());
const arrFlatDeep = [[[1,2],3], [0,[8,2]], [9,3]];
console.log(arrFlatDeep);
console.log(arrFlatDeep.flat(2));

// REVISION
const desposit = [1000, 30500, 5000, 400, 25000, 700, 100, 75, 10, 5, 25, 500];
console.log(desposit);
// reduce
const balanceDeposit = desposit.reduce((accumulator, currDeposit) => accumulator + currDeposit, 0);
console.log(balanceDeposit);

// map
const euro = 655.38;
const depositToEuro = desposit.map(currDepos => (currDepos / euro).toFixed(2));
console.log(depositToEuro);

// filter
const bestDesposit = desposit.filter((depos) => depos > 500);
console.log(bestDesposit);

//find
const getLowerDepsosit = desposit.find(depos => depos < 25);
console.log(getLowerDepsosit);

// findIndex
const getIndexDesposit4 = desposit.findIndex(depos => depos === 25000);
console.log(getIndexDesposit4);

// forEach
const printDeposit = desposit.forEach((currDep, i, arr) => console.log(`${i} : ${currDep}`));
console.log(printDeposit);

// some
const someTest = desposit.some(deposi => deposi > 1000);
console.log(someTest);
