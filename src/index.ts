// tsc --watch (to start compiler)
// tsc --init (to create tsconfig.json)
// dist folder means compiled files

// TypeScript Basic Types are: number, string, boolean, any

let id: number = 1
let userName: string = 'John'
let isLoggedIn: boolean = true
let message: any = 'Hello' // any is a type that can be anything

// TypeScript Arrays are: Array<T>
// İki farklı şekildede tanımlayabiliriz.
let ids: Array<number> = [1, 2, 3]
let names: string[] = ['John', 'Jane']

// TypeScript Tuples are arrays with fixed number of elements
// Tuple
let person: [string, number] = ['John', 23]
// Tuple Array
let people: [string, number][] = [
  ['John', 23],
  ['Jane', 24]
]
