// Array

 // 1. Declaration
const arr1 = new Array();
const arr2 = [1,2];

// 2. Index position
const fruits = ['apple','banana'];
console.log(fruits.length) // 2
console.log(fruits[0]) // apple
console.log(fruits[1]) // banana
console.log(fruits[2]) // undefined

//3. Looping over an array
// print all fruits
// a. for
for (let i=0; i<fruits.length; i++) {
	console.log(fruits[i]);
}
// b. for of
for (let fruit of fruits) {
	console.log(fruit);
}
// c. forEach
fruits.forEach(function(fruit, index) => console.log(fruit));

// 4. Addtion, deletion, copy

// push: add an item to the end
fruits.push('strawberry','orange');
console.log(fruits);
// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);
// unshift: add an item to the beningging
fruits.unshift('strawberry','orange');
console.log(fruits);
// shift: remove an item to the beningging
fruits.shift('strawberry','orange');
console.log(fruits);
// shift와 unshift는 push와 pop보다 훨씬 느림

// 5. slice, concat
// splice(start, deleteCount?)
fruits.splice(1,1);
// concat(...items)
fruits.concat(['lemon']);

// 6. Searching
// find the index
// indexOf
console.log(fruits.indexOf('apple');
// includes
console.log(fruits.includes('apple'); // 없으면 -1
//lastIndexOf
fruits.push('apple');
console.log(fruits.lastIndexOf('apple'));