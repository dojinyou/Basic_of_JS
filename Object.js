// Object-oriendted programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
	constructor(name, age) {
		// fields
		this.name = name;
		this.age = age;
	}
	// methods
	speak() {
		console.log('${this.name}: hello!');
	}
}
const dojin = new Person('dojin', 26);
console.log(dojin.name);
console.log(dojin.age);
dojin.speak();

// 2. Getter and setters
class User {
	constructor(firstName, lastName, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}
	get age() {
		// this.age 선언하면 호출 됨
		return this._age;
	}
	set age(value) {
		// this.age에 assign(= age)할 때 호출됨.
		// setter의 코드 속에 this.age를 할당하기 때문에 call stack이 over될 수 있다.
		// _를 이용해서 이름을 다르게 한다.
		this._age = value < 0 ? 0 : value;
	}
}

const user1 = new User('Steve', 'Job', -1);

// 3. Fields (public, private)
// 최근에 추가되어 많이 사용하고 있지는 않음.
// [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

class Experiment {
	publicField = 2;
	#privateField = 0;
}
const experiment = new Experiment();
console.log(experment.publicField);
// 2
console.log(experment.privateField);
// undefined

// 4. Static properties and methods
// 최근에 추가되었음.

class Article {
	static publisher = 'Dream Coding';
	constructor(articleNumber) {
		this.articleNumber = articleNumber;
	}

	static printPublisher() {
		console.log(Article.publisher);
	}
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for on class to extend another class.

class Shape {
	constructor(width, height, color) {
		this.width = width;
		this.height = height;
		this.color = color;
	}

	draw() {
		console.log('drawing ${this.color} color of');
	}

	getArea() {
		return this.width * this.height;
	}
}

class Rectangle extends Shape {}
class Triangle extends Shape {
	draw() {
		super.draw();
		console.log('▲');
	}
	getArea() {
		return (this.width * this.height) / 2;
	}
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const rectangle = new Rectangle(20, 20, 'red');
rectangle.draw();

// 6. Class checking: instanceOf

console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true
