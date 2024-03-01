'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// LETS USE OBJECT FOR ACCOUNTS BECAUSE IN THE REEL RULE USING WEB API, DATA COME OBJECT FORM 

// Data
const account1 = {
  owner: 'Jeremi KOLOMA',
  username: 'jeems',
  movements: [15000000, 450000, -400000, 30000, -6500, -1300, 700000, 1300000],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'David TOGO',
  username: 'daav',
  movements: [50000, 34000, -15000, -7900, -3210, -1000, 850000, -3000],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Hawa COULIBALY',
  username: 'eva',
  movements: [200000, -1000, 340000, -3000, -2000, 500000, 40000, -4060],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Mathieu SAGARA',
  username: 'mato',
  movements: [4300500, 105000, 7009000, 50000, 9000],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const displayMovements = function (movmts) {
  // set all the context of containerMovements to empty
  containerMovements.innerHTML = '';
  // for(const [i, mov] of movmts.entries()){
  //   console.log(`${i+1}: ${mov}`)
  // }
  movmts.forEach(function (mov, index) {
    const typeMovement = mov > 0 ? 'deposit' : 'withdrawal';
    const htmlMovementRow = `
    <div class="movements__row">
      <div class="movements__type movements__type--${typeMovement}">${index + 1} ${typeMovement}</div>
      <div class="movements__value">${mov} CFA</div>
   </div>
    `;
    // Displaying movements in the html file
    containerMovements.insertAdjacentHTML('afterbegin', htmlMovementRow);
  });
}
displayMovements(account1.movements);

// DISPLAY THE USER'S BALANCE
const displayBalanceMovement = function (movmnts) {
  const balance = movmnts.reduce(function (acc, currMov) {
    return acc + currMov;
  }, 0);
  // Display the balance in the UI
  labelBalance.textContent = `${balance} CFA`;
};
displayBalanceMovement(account1.movements);

// DISPLAY SUMMARY
const displaySummary = function (movement) {
  const cfaToDollar = 0.0017;
  // Summary IN
  const incomes = movement.filter(function (mov) {
    return mov > 0
  }).map(function (mov) {
    return mov * cfaToDollar;
  }).reduce(function (acc, mov) {
    return acc + mov;
  }, 0);

  // Summary OUT
  const outSum = movement.filter(function (mov) {
    return mov < 0;
  }).map(function (mov) {
    return mov * cfaToDollar;
  }).reduce(function (acc, mov) {
    return acc + mov;
  }, 0);

  // INTEREST
  const interestBank = 1.2;
  const interrestMov = movement.filter(function (mov) {
    return mov > 0;
  }).map(function (depost) {
    return (depost * interestBank) / 2;
  }).reduce(function (acc, currDepos) {
    return acc + currDepos;
  }, 0);

  // Display the InSummary in the UI
  labelSumIn.textContent = `${incomes} $`;
  labelSumOut.textContent = `${Math.abs(outSum)} $`;
  labelSumInterest.textContent = `${interrestMov}`;
};
displaySummary(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LOGIN PART

// EVENT HANDLER
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  // Prevent the form (KEEPING the FORM)
  e.preventDefault();

  // FINDING THE USER INFOS
  currentAccount = accounts.find(function (currUser) {
    return currUser.username === inputLoginUsername.value;
  });
 
  // Check if password match
  if (currentAccount?.pin == inputLoginPin.value) {
    // Welcome message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    // Display the UI
    containerApp.style.opacity = 100;
  }

}, false);



const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// MAP FIRST ARRAY IMMUTABLE - GET A NEW RESULT ARRAY 
const movementsUSD = movements.map(function (mov) {
  const fcfaToDollar = 0.0017;
  return mov * fcfaToDollar;
});
//console.log(movementsUSD);


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// FILTER FIRST ARRAY IMMUTABLE - GET A NEW RESULT ARRAY 
// Desposit Array
const deposit = movements.filter(function (mov) {
  return mov > 0;
});
//console.log(deposit);

// Withdrawal Array
const withdrawal = movements.filter(mov => mov < 0);
//console.log(withdrawal);


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// REDUCE FIRST ARRAY IMMUTABLE - GET A NEW RESULT ARRAY
const balance = movements.reduce(function (accum, mov, i, arr) {
  return accum + mov;
}, 0);

//console.log(balance);
