class Person {
  firstname: string;
  lastname: string;

  constructor() {
    this.firstname = "";
    console.log("CON Called");
    this.lastname = "";
  }

  getFullName(): string {
    return this.firstname;
  }
}

var per = new Person();
per.firstname = "Saurabh";
per.lastname = "Prajapati";
console.log(per);
console.log(per.getFullName());
