class Person {
  //   readonly name: string = "Saurabh Prajapti learn from kavshik Koghal";
  constructor(readonly name: string) {
    this.name = name;
  }
}

var aPerson = new Person("NA");
console.log(aPerson.name);
