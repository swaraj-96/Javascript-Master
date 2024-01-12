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
