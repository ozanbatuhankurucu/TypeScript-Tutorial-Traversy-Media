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

// Union is a type that can be any of the types in the union

let productID: number | string = 1
productID = '1'

// Enum is a way to define a set of named constants.
// There are three types of enums: Numeric, String, Heterogeneous
// const gibidir fakat bir takim avantajlari vardir okunurluk, performans gibi.
// Değer verilmediği zaman değerleri sıralı olarak atanır 0, 1, 2, 3 şeklinde.

enum Direction1 {
  Up,
  Down,
  Left,
  Right
}

console.log(Direction1.Right) // 3

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}

console.log(Direction2.Left) // Left

// Objects

type User = {
  name: string
  age: number | null
  address?: string // ? means optional
}

let user: User = {
  name: 'John',
  age: null
}
