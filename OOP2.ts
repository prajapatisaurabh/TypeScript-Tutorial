class Person {
  firstname: string;
  lastname: string;

  greet() {
    console.log("hey Threre !!");
  }
}

class Programmer extends Person {
  language: string;

  greet(): void {
    console.log("hello world 1!!!");
  }

  normalPerson(): void {
    super.greet();
  }
}

var aProgrammer = new Programmer();
aProgrammer.greet();
aProgrammer.normalPerson();

// Polymorprism
var aProgrammerPerson: Person = new Programmer();
aProgrammerPerson.greet();
// aProgrammerPerson.normalPerson();
