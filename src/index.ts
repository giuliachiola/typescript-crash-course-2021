/**
 * Basic types
 */
let id: number = 5
let company: string = 'Company name'
let isPublished: boolean = true
let x:any = 'Hello'

let ids: number[] // array of numbers, [1,2,3,4,5]
let arr: any[] = [1, true, 'Hello']

/**
 * Tuple
 * -> specify the types inside the array
 */
let person: [number, string, boolean] = [1, 'Giulia', true]

// Tuple array
let employee: [number, string][]

employee = [
  [1, 'Brad'],
  [2, 'John'],
  [3, 'Bill'],
]

/**
 * Union
 * -> if you want more than one type
 */
let productId: string | number
productId = '22' // or it could be a number `productId = 10`

/**
 * Enum
 */
enum Direction {
  Up, // by default it's 0
  Down, // 1
  Left, // 2
  Right, // 3
}

// if we set up the first value

enum Direction1 {
  Up = 1, //1
  Down, // 2
  Left, // 3
  Right, // 4
}

// we can also set this with strings

enum DirectionStrings {
  Up = 'up',
  Down = 'down',
  Left = 'left',
  Right = 'right',
}

/**
 * Objects
 */

// we can declare it in this way:

const user: {
  id: number,
  name: string
} = {
  id: 1,
  name: 'John'
}

// but a better way is

type User = {
  id: number,
  name: string,
}

const user2: User = {
  id: 1,
  name: 'John'
}

/**
 * Type assertion
 * -> explicity telling the compiler that we want to treat an entity as a different type
 */

let cid: any = 1

// 1. first way to write it
let customerId = <number>cid

// 2. second way
let customerId2 = cid as number

/**
 * Functions
 */

function addNum(x: number, y: number): number {
  return x + y
}

// void
function log(message: string | number): void {
  console.log(message)
}

/**
 * Interfaces
 */

interface UserInterface {
  id: number
  name: string
}

const user1: UserInterface = {
  id: 1,
  name: 'John',
}

type Point = number | string
const p1: Point = 1

// note that you can't use interface with uniont, like this
// interface Point = number | string

// Add optional parameters

interface User_InterfaceWithAgeOptional {
  id: number
  name: string
  age?: number
}

// Readonly properties

interface User_WithIdReadonly {
  readonly id: number
  name: string
  age?: number
}

const user3: User_WithIdReadonly = {
  id: 1,
  name: 'Bob'
}
// user3.id = 4 // NOPE! can't re-assign with `readonly`

// Use interface with a function

interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

/**
 * Classes
 */

class Person {
  id: number
  name: string

  // the constructor will run whenever the object is instantiated
  constructor(id: number, name: string) {
    this.id = id,
    this.name = name
  }
}

const brad = new Person(1, 'Brad') // here runs the constructor
const mike = new Person(2, 'Mike') // here runs the constructor again

brad.id = 10 // ok

// If we declare a property `private` we can access and modify it only inside the class

class Person_WithPrivateId {
  private id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id,
    this.name = name
  }
}

const giulia = new Person_WithPrivateId(1, 'Giulia')
// giulia.id = 10 // ERROR

// If we declare a property `protected` we can access and modify it only inside the class OR classes that extend this class

class Person_WithProtectedId {
  protected id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id,
    this.name = name
  }
}

const giulia2 = new Person_WithProtectedId(1, 'Giulia')
// giulia.id = 10 // ERROR

/**
 * Class with interfaces
 */

interface Person_Interface {
  id: number
  name: string
  register(): string
}

class PersonClass implements Person_Interface {
  id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id,
    this.name = name
  }

  register() {
    return `${this.name} is registered`
  }
}

/**
 * Extend a class
 */

class Employee extends Person { // Subclass
  position: string

  constructor(
    id: number,
    name: string,
    position: string
  ) {
    super(id, name) // inherited from Person class
    this.position = position
  }
}

const emp = new Employee(3, 'Shawn', 'developer')

/**
 * Generics
 */

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['John','Joe','Bill'])

// numArray.push('hello') // ERROR! we can't push a string in a number array
// strArray.push(10) // ERROR! we can't push a number in a string array