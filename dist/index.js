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
