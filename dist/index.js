"use strict";
// Basic Types
let id = 5;
let company = "Traversy Media";
let isPublished = true;
// If you set any, it can be changed to anything
let x = "Hello";
x = false;
// For arrays, set the type of the elements, then brackets
let ids = [1, 2, 3, 4, 5];
// ids.push("hello") will not work
let arr = [1, true, "Hello"];
//Tuple - you can set each element's type
let person = [1, "Brad", false];
//Tuple array
let employee;
employee = [
    [1, "Brad1"],
    [2, "Brad2"],
    [3, "Brad3"]
];
// Union 
let pid;
pid = "22";
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: "John"
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid        same as below
let customerId = cid;
// Functions - params should have types, unless we change noImplicitAny in config || return should also have a type
function addNum(x, y) {
    return x + y;
}
// Functions without return value should have the return type of "void"
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "John"
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, "Brad Traversy");
const mike = new Person(2, "Mike Jordan");
brad.name = "Bard";
console.log(brad.register());
// Class extension - Subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name); // So we don't have to do this.id = id again
        this.position = position;
    }
}
const emp = new Employee(3, "Shwanna", "Developer");
console.log(emp.register());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["Brad", "Joe", "Jill"]);
numArray.push("hello"); // We can push string into the array, because it takes any type as params
console.log(numArray);
function getArrayGenerics(items) {
    return new Array().concat(items);
}
let numArrayGenerics = getArrayGenerics([1, 2, 3, 4]);
let strArrayGenerics = getArrayGenerics(["Brad", "Joe", "Jill"]);
