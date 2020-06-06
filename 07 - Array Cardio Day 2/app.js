// ## Array Cardio Day 2

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
    ];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const oneNineteen = people.some(person => 2020 - person.year >= 19)
console.log(oneNineteen)

// Array.prototype.every() // is everyone 19 or older?
const allNineteen = people.every(person => 2020 - person.year >= 19)
console.log(allNineteen)

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const found = comments.find(comment => comment.id === 823423);
console.log(found)


// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
console.table(comments)
const foundIndex = comments.findIndex(comment => comment.id === 823423)
const newComments = comments.filter(comment => comment.id != 823423)
console.table(comments)
console.table(newComments)