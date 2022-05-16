// Basic Types
let id: number = 5
let company: string = "Traversy Media"
let isPublished: boolean = true

// If you set any, it can be changed to anything
let x: any = "Hello"
x = false

// For arrays, set the type of the elements, then brackets
let ids: number[] = [1, 2, 3, 4, 5]
// ids.push("hello") will not work
let arr: any[] = [1, true, "Hello"]

//Tuple - you can set each element's type
let person: [number, string, boolean] = [1, "Brad", false]

//Tuple array
let employee: [number, string][]

employee = [
    [1, "Brad1"],
    [2, "Brad2"],
    [3, "Brad3"]
]

// Union 
let pid: string | number
pid = "22"

// Enum
enum Direction1 {
    Up,
    Down,
    Left,
    Right
}

enum Direction2 {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right"
}

// Objects
type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: "John"
}

// Type Assertion
let cid: any = 1
// let customerId = <number>cid        same as below
let customerId = cid as number

// Functions - params should have types, unless we change noImplicitAny in config || return should also have a type
function addNum(x: number, y: number): number {
    return x + y
}

// Functions without return value should have the return type of "void"
function log(message: string | number): void {
    console.log(message);
}

// Interfaces - for objects it is better to use interfaces
interface UserInterface  {
    readonly id: number,        //cannot change the value later
    name: string,
    age?: number                //optional
}

const user1: UserInterface = {
    id: 1,
    name: "John"
}

// Interface vs Type 
// Interfaces cannot be used with primitives or unions

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y


// Classes
interface PersonInterface  {
    id: number,
    name: string,
    register(): string
}

class Person implements PersonInterface { // To implement the interface
    id: number // "Private": Only accessable within the class - "Protected" would be accessable from class extensions too
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

const brad = new Person(1, "Brad Traversy")
const mike = new Person(2, "Mike Jordan")

brad.name = "Bard"

console.log(brad.register());

// Class extension - Subclasses
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)   // So we don't have to do this.id = id again
        this.position = position
    }
}

const emp = new Employee(3, "Shwanna", "Developer")
console.log(emp.register());

// Generics
function getArray(items: any[]): any[] {
    return new Array().concat(items)
}

let numArray = getArray([1, 2, 3, 4])
let strArray = getArray(["Brad", "Joe", "Jill"])

numArray.push("hello") // We can push string into the array, because it takes any type as params
console.log(numArray);

function getArrayGenerics<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArrayGenerics = getArrayGenerics<number>([1, 2, 3, 4])
let strArrayGenerics = getArrayGenerics<string>(["Brad", "Joe", "Jill"])
