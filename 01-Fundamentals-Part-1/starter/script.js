/*
//Assignment-1 (Values and Variables)

let country = "India";
let continent = "Asia";
let population = 150;
console.log(country);
console.log(continent);
console.log(population);

*/

/*
//Assignment-2 (Data Types)

let isIsland = true;
let language;
let population = 150;
let country = "India";
console.log(typeof isIsland);
console.log(typeof language);
console.log(typeof population);
console.log(typeof country);

*/

/*
//Assignment-3 (let, const and var)

let language = "English";
const country = "India";
const continent = "Asia";
const isIsland = false;
isIsland = true;  // it will throw an error

*/

/*
//Assignment-4 (Basic Operators)

let population = 150;
const country = "India";
const continent = "Asia";
let language = "Hindi";
console.log(population / 2);
population += 1;
console.log(population);
console.log(population > 600);
console.log(population < 33);
let description =
  country +
  " is in " +
  continent +
  ", and it's " +
  population +
  " million people speak " +
  language;
console.log(description);

*/

/*
//Challenge 1

const heightOfMark = 1.69;
const massOfMark = 78;
const heightOfJohn = 1.95;
const massOfJohn = 92;


const heightOfMark = 1.88;
const massOfMark = 95;
const heightOfJohn = 1.76;
const massOfJohn = 85;

const BMIMark = massOfMark / (heightOfMark * heightOfMark);
const BMIJohn = massOfJohn / (heightOfJohn * heightOfJohn);

const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

*/

/*
//Assignmrnt-5 (Strings and Template Literals)

let population = 150;
const country = "India";
const continent = "Asia";
let language = "Hindi";

let description = `${country} is in ${continent}, and it's ${population} million people speak ${language}`;
console.log(description);

*/

/*
//Assignment-6 (Taking Decisions: if / else Statements)

let population = 130;
const country = "India";
if(population > 33){
  console.log(`${country}'s population is above average`)
}
else{
  console.log(`${country}'s population is ${33-population} below average`)
}

*/

/*

//challenge-2 Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

// const heightOfMark = 1.69;
// const massOfMark = 78;
// const heightOfJohn = 1.95;
// const massOfJohn = 92;

const heightOfMark = 1.88;
const massOfMark = 95;
const heightOfJohn = 1.76;
const massOfJohn = 85;

const BMIMark = massOfMark / (heightOfMark * heightOfMark);
const BMIJohn = massOfJohn / (heightOfJohn * heightOfJohn);
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's! (${BMIJohn})`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's! (${BMIMark})`);
}

*/

/*
//Assignment-6 (Type Conversion and Coercion)

console.log('9' - '5')  //4(number)
console.log('19' - '13' + '17') //617(string)
console.log('19' - '13' + 17)   //23(number)
console.log('123' < 57)   //(false)
console.log(5 + 6 + '4' + 9 - 4 - 2) //1149-4-2 = 1143(number)

*/

/*

//Assignment-7 (Equality Operators: == vs. ===)
//   == loosely(coercion)   ===strictly

const numNeighbours = prompt("How many neighbour countries does your country have?")

// LATER : This helps us prevent bugs
const numNeighbours = Number(prompt("How many neighbour countries does your country have?"))
 if(numNeighbours === 1){
  console.log("Only 1 border!")
 }
 else if (numNeighbours > 1) {
  console.log( 'More than 1 border')
 }
 else {
  console.log('No borders')
 }

 */

/*
 // Assignment-8 ( Logical Operators)
 
 let isIsland = false;
 let population = 30;
const country = "India";
let language = "english";

 if (language === 'english' && population < 50 && !isIsland)
 {
 console.log(`You should live in ${country} :)`);
 } else {
 console.log(`${country} does not meet your criteria :(`);
 }

 */

/*

// challenge-3

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the trophy 🏆");
// } else if (scoreKoalas > scoreDolphins) {
//   console.log("Koalas win the trophy 🏆");
// } else if (scoreDolphins === scoreKoalas) {
//   console.log("Both win the trophy!");
// }

// BONUS 1
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (97 + 112 + 101) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log('Dolphins win the trophy 🏆');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log('Koalas win the trophy 🏆');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log('Both win the trophy!');
} else {
  console.log('No one wins the trophy 😭');
}

*/

/*

// Assignment-9 ( The switch Statement)

let language = 'hindi';
switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}

*/

/*
// Assignment-10 ( The Conditional (Ternary) Operator)

let population = 130;
const country = "India";
console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average`)
 */

/*
// challenge-4
const bill = 40;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
 */