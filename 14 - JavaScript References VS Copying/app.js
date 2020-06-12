// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2);

age = 200
console.log(age, age2);

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.

// You might think we can just do something like this:
let team = players
console.log(team, players);



// however what happens when we update that array?
team[3] = 'Lux';

// now here is the problem!
console.log(team, players);

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
team1 = players.slice();
console.log(team1, players);

team1[3] = 'Jordan';

console.log(team1, players);

// one way

// or create a new array and concat the old one in
team2 = [].concat(players);

// or use the new ES6 Spread
team2 = [...players];

team2 = Array.from(players);
// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: 'Wes Bos',
    age: 80
};

// and think we make a copy:
// const captain = person;

// captain.number = 200;

// console.log(person);

// how do we take a copy instead?
const cap2 = Object.assign({}, person, {number: 200, age: 12})

console.log(person, cap2);

// We will hopefully soon see the object ...spread
const cap3 = { ...person };
cap3.number = 300;

console.log(person, cap3);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const cap4 = JSON.parse(JSON.stringify(person));
cap4.number = 500;
console.log(person, cap4);