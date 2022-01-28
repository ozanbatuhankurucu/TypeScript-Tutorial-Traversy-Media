// tsc --watch (to start compiler)
// tsc --init (to create tsconfig.json)
// dist folder means compiled files

// TypeScript Basic Types are: number, string, boolean, any

let id: number = 1
let userName: string = 'John'
let isLoggedIn: boolean = true
let message: any = 'Hello' // any is a type that can be anything

// TypeScript Arrays are: Array<T>
// Array types can be written in one of two ways. These are: Array<T> and T[]
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
// When no value is given, the values are assigned sequentially as 0, 1, 2, 3.

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
// rest is a special type that represents an array of all the remaining arguments
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

interface Person {
  name?: string
  readonly surname: string // readonly means that property cannot be changed
  age: number
}

const person1: Person = {
  surname: 'John',
  age: 23
}

// person1.surname = 'Doe' // Cannot assign to ‘surname’because it is a read-only property.

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

const person2 = new Person1('Furkan', 'Demirtaş', 25)
const person3 = new Person1('Ahmet', 'Uslu', 35)
const student1 = new Student('Devrim', 'Özkan', 21, false)
const student2 = new Student('Ozan Batuhan', 'Kurucu', 25, true)

// student2.name = 'aa' // Error: Property 'name' is protected and only accessible within class 'Person1' and its subclasses.
// student2.age = 5 // Error : Property 'age' is private and only accessible within class 'Person1'.
student2.surname = 'Ozdemir' // Property 'surname' is public and can be accessed from outside of the class.

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

// Generics
// Generics are a way to specify the type of the data that an object or function accepts

function getArray<T>(input: T[]): T[] {
  return input
}

const numbersArray = getArray<number>([1, 2, 3])
const namesArray = getArray<string>(['John', 'Jane'])
// numbersArray.push('5') // Error:  Argument of type string is not assignable to parameter of type number[]
// namesArray.push(5) // Error:  Argument of type number is not assignable to parameter of type string[]

// create useState function with generics

function useState<T>(initialState: T): [T, (newState: T) => void] {
  let state = initialState
  function setState(newState: T) {
    state = newState
  }
  return [state, setState]
}

const [count, setCount] = useState(0)

// setCount('a') // Error: Type '"a"' is not assignable to type 'number'.
