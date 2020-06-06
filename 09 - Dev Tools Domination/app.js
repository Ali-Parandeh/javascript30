const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log('Hello I am a %s string', 'bad')

// Styled
console.log('%c I am a great text', 'font-size: 20px; color: red' )

// warning!
console.warn('oh noo');

// Error :|
console.error('shit');

// Info
console.log('cats are the most popular pets');

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('whoo'), 'This is wrong');

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
console.clear();
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`My dog's name is ${dog.name}`);
    console.log(`My dog's age is ${dog.age}`);
    console.log(`My dog's name is ${dog.nam} which is ${dog.age} years old.`);
    console.groupEnd(`${dog.name}`);
})


// counting
console.count('yes');
console.count('no');
console.count('yes');
console.count('no');
console.count('no');
console.count('no');
console.count('no');
console.count('yes');
console.count('yes');
console.count('no');
console.count('yes');


// timing
console.time('fetching data');
fetch('https://api.github.com/users/Ali-Parandeh')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    })

console.table(dogs);