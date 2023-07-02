"use strict";
class Person {
    greet() {
        console.log("hey Threre !!");
    }
}
class Programmer extends Person {
    greet() {
        console.log("hello world 1!!!");
    }
    normalPerson() {
        super.greet();
    }
}
var aProgrammer = new Programmer();
aProgrammer.greet();
aProgrammer.normalPerson();
// Polymorprism
var aProgrammerPerson = new Programmer();
aProgrammerPerson.greet();
// aProgrammerPerson.normalPerson();
