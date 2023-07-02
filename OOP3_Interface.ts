interface Person {
  firstname: string;
  lastname: string;

  greet(): void;
}

class PersonImpl implements Person {
  firstname: string;
  lastname: string;
  greet(): void {
    console.log("Hey there i am here !!");
  }
}

let aPerson: Person = new PersonImpl();
aPerson.greet();

// DUCK TYPING
let someObj = {
  firstname: "Test",
  lastname: "Test",
  greet: () => "Hello Test",
};

aPerson = someObj;
aPerson.greet();
