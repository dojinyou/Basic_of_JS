// function
function printHello() {
	console.log('Hello');
}
printHello();
function log(message) {
	console.log(message);
}
log('Hello@');

// parameters
function changeName(obj) {
	obj.name = 'coder';
}
const dojin = { name: 'dojin' };
changeName(dojin);
console.log(dojin);

// default parameters
function showMessage(message, from = 'unknown') {
	console.log('${message} by {from}');
}
showMessage('Hi!');

// Rest parameters
function printALL(...args) {
	for (let i = 0; i < args.length; i++) {
		console.log(args[i]);
	}
	for (const arg of args) {
		console.log(arg);
	}
}
printALL('first', 'second', 'third');

// Local scope
let globalMessage = 'global'; //global variable
function printMessage() {
	let message = 'hello';
	console.log(message);
	console.log(globalMessage);
}
printMessage();

// return a value
function sum(a, b) {
	return a + b;
}
const result = sum(1, 2);
console.log('sum : ${sum(1,2)}');

// Early return, early exit
// bad
function upgradeUser(user) {
	if (user.point > 10) {
		// long upgrade logic
	}
}

// good
function upgradeUser(user) {
	if (user.point <= 10) {
		return;
	}
	// long upgrade logic
}

// function expression
const print = function () {
	// anonymous function
	console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// Arrow function
// always anonymous
// 람다 함수 같은 간단한 형태로 함수 정의
// {} block을 사용하면 return 을 이용해줘야됨.

const simplePrint = function () {
	console.log('simplePrint!');
};
const simplePrint = () => console.log('simplePrint!');

// IIFE: Immediately Invoked Function Expression
// 바로 호출가능.

(function hello() {
	console.log('IIFE');
})();
