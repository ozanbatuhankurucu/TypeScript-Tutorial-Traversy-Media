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
