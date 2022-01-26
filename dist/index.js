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
