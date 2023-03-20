//---------------------------------------------------------------------//
//Values and Variables

/*let js = 'amazing';
if (js === 'amazing') alert('javascript is FUN!');

console.log(40 + 8 + 23 - 10);

let firstName = 'Bilal'
console.log(firstName);

// variables can only contain $ and _ sign, as well as numbers and letters

let myFirstJob = 'Retail assistant';
let myCurrentJob = 'SD Trainee';
console.log(myFirstJob);
*/
//---------------------------------------------------------------------//
//Data Types

// Data are either objects or primitive
/* Primitive:
1. (Floating Point) Numbers
2. Strings
3. Boolean. Making Decisions.
4. Undefined
5. Null
6. Symbols. Values that are unique; can't be changed.
7. BigInt. Allows bigger numbers
*/
// JS has dynamic typing, meaning you don't have to define the type.
// Value has data type, not variable.

/* let javaScriptIsFun = true;
console.log(javaScriptIsFun)

console.log(typeof javaScriptIsFun)
console.log(typeof `Bilal`)

javaScriptIsFun = 'YES!'
console.log(typeof javaScriptIsFun)
// use let when assigning new variables.
// Do not use let when redefining

let bot;
console.log(bot)
console.log(typeof bot)

bot = 'ChatGPT'
console.log(typeof bot)

console.log(typeof null)
*/
//---------------------------------------------------------------------//
//let, const and var
// let is used when reassigning may happen. Mutable.
// const is for constants, things that don't change. Immutable.
// var SHOULD BE AVOIDED.
// ALWAYS use const unless you're sure reassignment is necessary.

/*let age = 24;
age = 25;

const birthYear = 1998
birthYear = 1999 */
//---------------------------------------------------------------------//
//Basic Operators
// Mathematical, Logical Operators, Comparison + more

/*const now = 2050;
const ageBilal = now - 1998;
const ageAdam = now - 2002;
console.log(ageBilal, ageAdam);
console.log(ageBilal * 3, ageBilal / 3, ageBilal ** 2);
// Assignment
const firstName = 'Bilal'
const lastName = 'MB'
console.log(firstName + ' ' + lastName);

let x = 10 + 5;
x /= 3;
console.log(x);
// Comparison
console.log(ageBilal < ageAdam); */
//---------------------------------------------------------------------//
//Operator Precedence
/* const ageBilal = 24;
const ageAdam = 20;
let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);
const averageAge = (ageAdam + ageBilal) / 2;
console.log(averageAge); */
//---------------------------------------------------------------------//
//strings + Template literals

/*const firstName = 'Bilal';
const job = 'Programmer';
const birthYear = '1998';
const year = 2023;

const bilal = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '.'
console.log(bilal)

const bilalNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}.`;
console.log(bilalNew);

console.log(`string
with
multiple
lines`);*/
//---------------------------------------------------------------------//
// If/else Statements

/*const age = 15;

if (age >= 18) {
    console.log('Bilal can start learning how to drive 🚗');
} else {
    const yearsLeft = 18 - age
    console.log(`You need to wait ${yearsLeft} more years! 😊`);
}

let century;
const birthYear = 1998;
if (birthYear < 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century); */
//---------------------------------------------------------------------//
//Type Conversion and Type Coercion
// You can use Number() to convert a string to number
// You can use String() to convert a number to a string
// JS has auto Type Conversion.

/* const inputYear = "1998";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number('Bilal'));
console.log(typeof NaN); */
//---------------------------------------------------------------------//
//Truthy and Falsey values
// falsey > 0, '', undefined, null, NaN

/*console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Bilal'));
console.log(Boolean({}));

// We don't evaluate truthy/falsey values like the above.
// It's done Coercively, through if/else statements e.g

const money = 100;

if (money) {
    console.log("Don't spend it all!");
} else {
    console.log("You should get a job...");
}

let height;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Undefined..');
}*/
//---------------------------------------------------------------------//
//Equality Operators
// == Loose equality operator. Does type coercion. Avoid this one as much as possible.
// ===. Strict equality Operator. Doesn't do type coercion.

/*const favourite = Number(prompt("What is your favourite number?"));
console.log(favourite);

if (favourite === 23) {
    console.log("Cool!");
} else if (favourite === 7) {
    console.log("7 is cool i guess...");
} else {
    console.log('Number is not 7 or 23!');
}*/

// != and !== also exist to do the opposite.
//---------------------------------------------------------------------//
//Boolean Logic
// AND, OR, NOT

//---------------------------------------------------------------------//
//Logical Operators

/*const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense)*/


// if (hasDriversLicense && hasGoodVision) {
//     console.log("Sarah is able to drive :)")
// } else {
//     console.log("Someone else should drive...")
// }

/*const isTired = true;
console.log(hasDriversLicense && hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive :)")
} else {
    console.log("Someone else should drive...")
}*/
//---------------------------------------------------------------------//
// Switch Statement

/*const day = 'Saturday';
switch (day) {
    case 'Monday':
        console.log('Plan course structure');
        console.log("Go to coding meetup");
        break;
    case 'Tuesday':
        console.log("Prepare theory videos")
        break;
    case 'Wednesday':
    case 'Thursday':
        console.log("Go to the gym")
        break;
    case 'Friday':
        console.log("Friday prayer!")
        break;
    case 'Saturday':
    case 'Sunday':
        console.log("Weekend :D")
        break;
    default:
        console.log('Not a valid day!')

}
if (day === "Monday") {
    console.log('Plan course structure');
    console.log("Go to coding meetup");
} else if (day === "Tuesday") {
    console.log("Prepare theory videos");
} else if (day === "Wednesday" || day === "Thursday") {
    console.log("Go to the gym");
} else if (day === "Friday") {
    console.log("Friday prayer!");
} else if (day === "Saturday" || (day === "Sunday")) {
    console.log("Weekend :D");
} else {
    console.log('Not a valid day!')
}*/

//---------------------------------------------------------------------//
// Statements and Expressions

//---------------------------------------------------------------------//
// Conditional + Ternary Operator
// condition ? (Result If true) : (else)
// Operators always produce value> expression > we can assign it to values.

/*const age = 17;
age >= 18 ? console.log("I'd like to learn to drive") :
    console.log("I'll keep on studying instead!");

// Operators always produce value> expression > we can assign it to values.
const driveOrStudy = age >= 18 ? "learn driving" : "study instead";

console.log(driveOrStudy);

let drive;
if (age >= 18) {
    drive = "learn driving";
} else {
    drive = "study instead";
}

console.log(drive)

console.log(`I want to ${age >= 18 ? "learn driving" : "study instead"}`);
*/

console.log('--------------------------------------------')
