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

let productID: number | string | boolean = 1
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

// Type Assertion is a way to tell the compiler that the value has a certain type
// when using TypeScript with JSX, only as-style assertions are allowed
// JSX ile birlikte kullanirken sadece as syntaxina izin verilir.

let cid: any = 1
// let customerId = <number>customerId
let customerId = cid as number
//  customerId type is number anymore

// Functions

function add(a: number, b: number): number {
  return a + b
}

// Optional Parameters
function add2(a: number, b?: number): number {
  return a + (b || 0)
}

// Default Parameters
function add3(a: number, b: number = 0): number {
  return a + b
}

// Rest Parameters
// rest kalan diger parametrelerin bir dizi olarak ifade edilmesidir.
function add4(a: number, b: number, ...rest: number[]): number {
  return a + b + rest.reduce((a, b) => a + b, 0)
}
add4(1, 2, 3, 4, 5) // 15

// Function Types
let add5: (a: number, b: number) => number

add5 = (a, b) => a + b

// Function Types with Union Types
let add6: (a: number, b: number) => number | string

add6 = (a, b) => a + b

// Function Types with Array Types
let add7: (a: number, b: number) => number[]

add7 = (a, b) => [a + b]

// Function Types with Tuple Types
let add8: (a: number, b: number) => [number, number]

add8 = (a, b) => [a + b, a - b]

// Function Types with Object Types
let add9: (a: number, b: number) => { a: number; b: number }

add9 = (a, b) => ({ a, b })

// Function Types with Function Types
let add10: (a: number, b: number) => (c: number) => number

add10 = (a, b) => (c) => a + b + c

// Interface
// Interfaces are a way to define the shape of an object

// readonly means that property cannot be changed
interface Person {
  name?: string
  readonly surname: string
  age: number
}

const person1: Person = {
  surname: 'John',
  age: 23
}

// Function Interface
// Function interfaces are used to define the shape of a function

interface Calculation {
  (a: number, b: number): number
}

let addFn: Calculation = (a, b) => a + b
let subtractFn: Calculation = (a, b) => a - b

// Classes & Data Modifiers
// Classes are a way to define a type that represents an object
// Data modifiers are used to modify the data of an object

class Person1 {
  protected name: string
  public surname: string
  private age: number

  constructor(name: string, surname: string, age: number) {
    this.name = name
    this.surname = surname
    this.age = age
  }

  greet(): string {
    return `Hello, that is ${this.name + this.surname} her/his age is ${this.age}`
  }
}

class Student extends Person1 {
  isGraduated: boolean

  constructor(name: string, surname: string, age: number, isGraduated: boolean) {
    super(name, surname, age)
    this.isGraduated = isGraduated
  }

  nameWithIsGraduated(): string {
    return `${this.name} ${this.surname} is ${this.isGraduated ? 'graduated' : 'not graduated'}`
  }
}

const person2 = new Person1('Furkan', 'Demirtaş', 23)
const person3 = new Person1('Ahmet', 'Uslu', 24)
const person4 = new Student('Devrim', 'Özkan', 21, false)
const person5 = new Student('Ozan Batuhan', 'Kurucu', 23, true)

// person5.name = 'aa' // Property 'name' is protected and only accessible within class 'Person1' and its subclasses.
// person5.age = 5 // Property 'age' is private and only accessible within class 'Person1'.
// person5.surname = 'Ozdemir' // Property 'surname' is public and can be accessed from outside of the class.

// Implement Interface in Class

interface PersonInterface {
  name: string
  surname: string
  getName(): string
}

class PersonForInterface implements PersonInterface {
  name: string
  surname: string

  constructor(name: string, surname: string) {
    this.name = name
    this.surname = surname
  }

  getName(): string {
    return `${this.name} ${this.surname}`
  }
}

// Extending Classes(Subclasses)

class Employee extends PersonForInterface {
  department: string

  constructor(name: string, surname: string, department: string) {
    super(name, surname) // super is used to call the constructor of the parent class
    this.department = department
  }

  getDepartment(): string {
    return `Employee name is ${this.getName()} and department is ${this.department}`
  }
}

const employee = new Employee('Ozan Batuhan', 'Kurucu', 'Software Engineering')

employee.getDepartment() // Employee name is Ozan Batuhan Kurucu and department is Software Engineering
