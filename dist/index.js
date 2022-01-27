"use strict";
// tsc --watch (to start compiler)
// tsc --init (to create tsconfig.json)
// dist folder means compiled files
// TypeScript Basic Types are: number, string, boolean, any
let id = 1;
let userName = 'John';
let isLoggedIn = true;
let message = 'Hello'; // any is a type that can be anything
// TypeScript Arrays are: Array<T>
// İki farklı şekildede tanımlayabiliriz.
let ids = [1, 2, 3];
let names = ['John', 'Jane'];
// TypeScript Tuples are arrays with fixed number of elements
// Tuple
let person = ['John', 23];
// Tuple Array
let people = [
    ['John', 23],
    ['Jane', 24]
];
// Union is a type that can be any of the types in the union
let productID = 1;
productID = '1';
// Enum is a way to define a set of named constants.
// There are three types of enums: Numeric, String, Heterogeneous
// const gibidir fakat bir takim avantajlari vardir okunurluk, performans gibi.
// Değer verilmediği zaman değerleri sıralı olarak atanır 0, 1, 2, 3 şeklinde.
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Right); // 3
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Left); // Left
let user = {
    name: 'John',
    age: null
};
// Type Assertion is a way to tell the compiler that the value has a certain type
// when using TypeScript with JSX, only as-style assertions are allowed
// JSX ile birlikte kullanirken sadece as syntaxina izin verilir.
let cid = 1;
// let customerId = <number>customerId
let customerId = cid;
//  customerId type is number anymore
// Functions
function add(a, b) {
    return a + b;
}
// Optional Parameters
function add2(a, b) {
    return a + (b || 0);
}
// Default Parameters
function add3(a, b = 0) {
    return a + b;
}
// Rest Parameters
// rest kalan diger parametrelerin bir dizi olarak ifade edilmesidir.
function add4(a, b, ...rest) {
    return a + b + rest.reduce((a, b) => a + b, 0);
}
add4(1, 2, 3, 4, 5); // 15
// Function Types
let add5;
add5 = (a, b) => a + b;
// Function Types with Union Types
let add6;
add6 = (a, b) => a + b;
// Function Types with Array Types
let add7;
add7 = (a, b) => [a + b];
// Function Types with Tuple Types
let add8;
add8 = (a, b) => [a + b, a - b];
// Function Types with Object Types
let add9;
add9 = (a, b) => ({ a, b });
// Function Types with Function Types
let add10;
add10 = (a, b) => (c) => a + b + c;
const person1 = {
    surname: 'John',
    age: 23
};
let addFn = (a, b) => a + b;
let subtractFn = (a, b) => a - b;
// Classes & Data Modifiers
// Classes are a way to define a type that represents an object
// Data modifiers are used to modify the data of an object
class Person1 {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    greet() {
        return `Hello, that is ${this.name + this.surname} her/his age is ${this.age}`;
    }
}
class Student extends Person1 {
    constructor(name, surname, age, isGraduated) {
        super(name, surname, age);
        this.isGraduated = isGraduated;
    }
    nameWithIsGraduated() {
        return `${this.name} ${this.surname} is ${this.isGraduated ? 'graduated' : 'not graduated'}`;
    }
}
const person2 = new Person1('Furkan', 'Demirtaş', 23);
const person3 = new Person1('Ahmet', 'Uslu', 24);
const person4 = new Student('Devrim', 'Özkan', 21, false);
const person5 = new Student('Ozan Batuhan', 'Kurucu', 23, true);
class PersonForInterface {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    getName() {
        return `${this.name} ${this.surname}`;
    }
}
// Extending Classes(Subclasses)
class Employee extends PersonForInterface {
    constructor(name, surname, department) {
        super(name, surname); // super is used to call the constructor of the parent class
        this.department = department;
    }
    getDepartment() {
        return `Employee name is ${this.getName()} and department is ${this.department}`;
    }
}
const employee = new Employee('Ozan Batuhan', 'Kurucu', 'Software Engineering');
employee.getDepartment(); // Employee name is Ozan Batuhan Kurucu and department is Software Engineering
// Generics
// Generics are a way to specify the type of the data that an object or function accepts
function getArray(input) {
    return input;
}
const numbersArray = getArray([1, 2, 3]);
const namesArray = getArray(['John', 'Jane']);
numbersArray.push('5'); // Error:  Argument of type string is not assignable to parameter of type number[]
namesArray.push(5); // Error:  Argument of type number is not assignable to parameter of type string[]
// create useState function with generics
function useState(initialState) {
    let state = initialState;
    function setState(newState) {
        state = newState;
    }
    return [state, setState];
}
const [count, setCount] = useState(0);
setCount('a'); // Error: Type '"a"' is not assignable to type 'number'.
