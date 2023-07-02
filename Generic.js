"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
function echo(arg) {
    return arg;
}
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.firstname = firstname;
        this.lastname = lastname;
    }
}
exports.Person = Person;
class Admin extends Person {
}
class Manager extends Person {
}
function personEcho(person) {
    return person;
}
var admin = new Admin("admin", "admin");
var p = personEcho(admin);
var pm = personEcho(new Manager("manager", ",mamager"));
var str = echo(1);
