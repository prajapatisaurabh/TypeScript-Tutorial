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
  constructor(private firstname: string, private lastname: string) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  greet() {
    console.log("hey Threre !! i am " + this.firstname);
  }
}

class Programmer extends Person {
  language: string;

  normalPerson(): void {
    super.greet();
  }
}

var aProgrammer: Person = new Programmer("saurabh", "prajapati");
aProgrammer.greet();
