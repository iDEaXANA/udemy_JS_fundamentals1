//Values and Variables
/*let country = 'United Kingdom'
let continent = 'Europe'
let population = 67.33

console.log(country, continent, population)*/


//Data Types
/*let isIsland = true
language =
    console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//let, const and var
/*language = 'English'
const country2 = 'United Kingdom'
const continent2 = 'Europe'
population = 70.01
console.log(population)*/

//Basic Operators
/*console.log(population / 2);
console.log(population++)
const finlandPopulation = 6
console.log(population > 6);
const avgPopulation = 33
console.log(population < 33);
const description = country + 'is in' + continent + ', and its' + population + 'million people speak' + language + '.'
console.log(description);*/

//Operator Precedence
// N/A

// Coding Challenge #1
/*let heightMark1 = 1.69;
let massMark1 = 78;
let heightJohn1 = 1.95;
let massJohn1 = 92;

let heightMark2 = 1.88;
let massMark2 = 95;
let heightJohn2 = 1.76;
let massJohn2 = 85;
testData1BMIMark = massMark1 / heightMark1 ** 2;
testData1BMIJohn = massJohn1 / heightJohn1 ** 2;

testData2BMIMark = massMark2 / heightMark2 ** 2;
testData2BMIJohn = massJohn2 / heightJohn2 ** 2;

const markHigherBMI1 = testData1BMIMark > testData1BMIJohn
const markHigherBMI2 = testData2BMIMark > testData2BMIJohn
// const BMI = mass / height ** 2


console.log(testData1BMIMark, testData1BMIJohn, markHigherBMI1)
console.log(testData2BMIMark, testData2BMIJohn, markHigherBMI2) */

// Strings + Template Literals

/* const description1 = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;

console.log(description1);

// If/else Statements
if (population > 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${avgPopulation - population} million below the average`);
}

// Coding Challenge #2
let heightMark1 = 1.69;
let massMark1 = 78;
let heightJohn1 = 1.95;
let massJohn1 = 92;

let heightMark2 = 1.88;
let massMark2 = 95;
let heightJohn2 = 1.76;
let massJohn2 = 85;

testData1BMIMark = massMark1 / heightMark1 ** 2;
testData1BMIJohn = massJohn1 / heightJohn1 ** 2;

testData2BMIMark = massMark2 / heightMark2 ** 2;
testData2BMIJohn = massJohn2 / heightJohn2 ** 2;


const markHigherBMI2 = testData2BMIMark > testData2BMIJohn

if (testData1BMIMark > testData1BMIJohn) {
    console.log(`Mark's BMI(${testData1BMIMark}) is higher than John's BMI(${testData1BMIJohn})`);
} else {
    console.log(`John's BMI(${testData1BMIJohn}) is higher than Mark's BMI(${testData1BMIMark})`);
}

if (testData2BMIMark > testData2BMIJohn) {
    console.log(`Mark's BMI(${testData2BMIMark}) is higher than John's BMI(${testData2BMIJohn})`);
} else {
    console.log(`John's BMI(${testData2BMIJohn}) is higher than Mark's BMI(${testData2BMIMark})`);
} */

//Type Conversion and Type Coercion
// 4
// 617
// 23
// False
// 107 WRONG(1143). As soon as its effected by a string, it will turn into a string.

//Truthy and Falsey values

//Equality Operators

/*let numNeighbours = Number(prompt("How many neighbouring countries do you have?"));

if (numNeighbours === 1) {
    console.log("Only 1 border!");
} else if (numNeighbours > 1) {
    console.log("More than 1 border!");
} else {
    console.log("No Borders");
}*/

//Logical Operators

// Coding Challenge #3

/*const dolphinGame1 = 97;
const dolphinGame2 = 112;
const dolphinGame3 = 101;

const koalaGame1 = 109;
const koalaGame2 = 95;
const koalaGame3 = 106;

const dolphinAvg = (dolphinGame1 + dolphinGame2 + dolphinGame3) / 3;
const koalaAvg = (koalaGame1 + koalaGame2 + koalaGame3) / 3;
console.log(dolphinAvg, koalaAvg);

if (dolphinAvg > koalaAvg && dolphinAvg > 100) {
    console.log("The Dolphins win!");
} else if (koalaAvg > dolphinAvg && koalaAvg > 100) {
    console.log("The Koalas win!");
} else if (koalaAvg === dolphinAvg && dolphinAvg > 100 && koalaAvg > 100) {
    console.log("It's a draw!");
} else {
    console.log("They didn't score enough points. No one wins!");
}*/

//Test 1: Not enough points
//Test 2: Koalas win
//Test 3: Draw.

// Switch Statement
/*const language = ""
switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log("MOST number of native speakers!");
        break;
    case 'spanish':
        console.log("2nd place");
        break;
    case 'english':
        console.log("3rd place");
        break;
    case 'hindi':
        console.log("4th place");
        break;
    case 'arabic':
        console.log('5th place');
        break;
    default:
        console.log("Other languages are cool!")
}*/


// Statements and Expressions

// Conditional + Ternary Operator
/*const population = 67

population >= 33 ? console.log("Your country's population is above average") : console.log("It's below average...")*/

// Coding Challenge #4

/*const billValue = 275; // 275, 40, 430
let tip = "";
let tipAmount = billValue >= 50 && billValue <= 300 ? tip = (billValue * 1.15) - billValue : tip = (billValue * 1.2) - billValue;
let finalValue = tipAmount + billValue;

console.log(`Your bill is ${billValue}. Thank you for tipping ${tip}. Your final bill is now ${finalValue}. Thanks for dining here!`)*/


