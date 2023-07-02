"use strict";
class PersonImpl {
    greet() {
        console.log("Hey there i am here !!");
    }
}
let aPerson = new PersonImpl();
aPerson.greet();
// DUCK TYPING
let someObj = {
    firstname: "Test",
    lastname: "Test",
    greet: () => "Hello Test",
};
aPerson = someObj;
aPerson.greet();
