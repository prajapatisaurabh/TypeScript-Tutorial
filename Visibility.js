"use strict";
// class Person {
//   private firstname: string;
//   private lastname: string;
//   constructor(firstname: string, lastname: string) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//   }
//   greet() {
//     console.log("hey Threre !! i am " + this.firstname);
//   }
// }
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.firstname = firstname;
        this.lastname = lastname;
    }
    greet() {
        console.log("hey Threre !! i am " + this.firstname);
    }
}
class Programmer extends Person {
    normalPerson() {
        super.greet();
    }
}
var aProgrammer = new Programmer("saurabh", "prajapati");
aProgrammer.greet();
