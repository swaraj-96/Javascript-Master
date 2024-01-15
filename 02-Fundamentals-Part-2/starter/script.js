// Assignment-1 (Functions)

/*
function describeCountry(country, population, capitalCity) {
  console.log(
    `${country} has ${population} million people and its capital city is ${capitalCity}`
  );
}

country1 = describeCountry("India", 150, "Delhi");
console.log(country1);
country2 = describeCountry("Russia", 50, "Moscow");
console.log(country1);
country3 = describeCountry("USA", 80, "Washington");
console.log(country1);

*/

/*
// Assignment -2 (Function Declarations vs. Expressions)

//function declaration
function percentageOfWorld1 (population) {
    percentageOfWorldPopulation = (population/7900)*100;
    return percentageOfWorldPopulation;
}

const country1 = percentageOfWorld1(1500)
const country2 = percentageOfWorld1(2500)
const country3 = percentageOfWorld1(500)

console.log(country1, country2, country3)

//function expression
const percentageOfWorld2  = function(population) {
  percentageOfWorldPopulation = (population/7900)*100;
  return percentageOfWorldPopulation;
}

const res1 = percentageOfWorld2(1500)
const res2 = percentageOfWorld2(2500)
const res3 = percentageOfWorld2(500)

console.log(res1, res2, res3)

*/

/*
// Assignment -3 (Arrow Function)

const percentageOfWorld3 = (population) => (population/7900)*100;
const res1 = percentageOfWorld3(1500)
const res2 = percentageOfWorld3(2500)
const res3 = percentageOfWorld3(500)

console.log(res1, res2, res3)

*/

/*
// Assignment -4 (Functions Calling Other Functions)

function percentageOfWorld1(population) {
  percentageOfWorldPopulation = (population / 7900) * 100;
  return percentageOfWorldPopulation;
}

function describePopulation(country, population) {
  const percentage = percentageOfWorld1(population);
  console.log(
    `${country} has ${population} million people, which is about ${percentage} of the world.`
  );
}
describePopulation('India', 2500)
describePopulation('USA', 500)
describePopulation('Srilanka', 230)

*/

/*
// Assignment -5 ( Introduction to Arrays)

const populations = [1500, 200, 1200, 600];
console.log(populations.length === 4)

function percentageOfWorld1(population) {
  percentageOfWorldPopulation = (population / 7900) * 100;
  return percentageOfWorldPopulation;
}

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3])
  ];

  console.log(percentages)

  */

/*

  // Assignment -6 ( Basic Array Operations (Methods) )

  const neighbours = ['Nepal', 'Srilanka', 'Bhutan']
  console.log(neighbours)
  neighbours.push('Utopia')
  console.log(neighbours)
  neighbours.pop()
  console.log(neighbours)
  console.log(neighbours.includes('Germany'))
  if(!neighbours.includes('Germany')){
      console.log('Probably not a central European country :D')
  }

 neighbours[neighbours.indexOf('Srilanka')] = 'Bali';
 console.log(neighbours)
 
*/

/*
// Assignment -7 (Introduction to Objects)

const myCountry = {
  country: "India",
  capital: "New Delhi",
  language: "Hindi",
  population: 150,
  neighbours: ['Nepal', 'Srilanka', 'Bhutan']
}

console.log(myCountry)

*/

/*

// Assignment - 8 (Dot vs. Bracket Notation)

const myCountry = {
  country: "India",
  capital: "New Delhi",
  language: "Hindi",
  population: 150,
  neighbours: ["Nepal", "Srilanka", "Bhutan"],
};

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

//dot notation
myCountry.population += 2;
console.log(myCountry.population)
//bracket notation
myCountry['population'] -= 2;
console.log(myCountry.population)

*/

/*
// Assignment - 9 (Object Methods)

const myCountry = {
  country: "India",
  capital: "New Delhi",
  language: "Hindi",
  population: 150,
  neighbours: ["Nepal", "Srilanka", "Bhutan"],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language} speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    );
  },
  checkIsland: function () {
   this.isIsland = this.neighbours.length === 0 ? true : false;

  },
};

myCountry.describe();
myCountry.checkIsland()
console.log(myCountry.isIsland)

*/

/*
// Assignment - 10 (Iteration: The for Loop)
  
for(let i = 1; i<=50; i++){
    console.log(`Voter number ${i} is currently voting`)
}

*/

/*
// Assignment - 11 (Looping Arrays, Breaking and Continuing)

const populations = [1500, 200, 1200, 600];
const percentage2= [];
function percentageOfWorld1(population) {
  percentageOfWorldPopulation = (population / 7900) * 100;
  return percentageOfWorldPopulation;
}
 
for(let i = 0; i<populations.length; i++){

  //percentage2[i] =  percentageOfWorld1(populations[i])
  const perc = percentageOfWorld1(populations[i])
  percentage2.push(perc)
}

console.log(percentage2)

*/

/*
// Assignment - 12 ( Looping Backwards and Loops in Loops)

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

console.log(listOfNeighbours);

for (let i = 0; i < listOfNeighbours.length; i++)
  for (let y = 0; y < listOfNeighbours[i].length; y++)
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);

 */

    /*
// Assignment - 13 ( The while Loop)
const populations = [1500, 200, 1200, 600];

function percentageOfWorld1(population) {
  percentageOfWorldPopulation = (population / 7900) * 100;
  return percentageOfWorldPopulation;
}

const percentages3 = [];
let i = 0;
while (i < populations.length) {
  const perc = percentageOfWorld1(populations[i]);
  percentages3.push(perc);
  i++;
}
console.log(percentages3);

*/

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
}
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);


///////////////////////////////////////

*/

// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);

*/

// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

/*
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}
*/


