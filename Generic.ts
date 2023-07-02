function echo<T>(arg: T): T {
  return arg;
}

export class Person {
  constructor(public firstname: string, public lastname: string) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

class Admin extends Person {}

class Manager extends Person {}

function personEcho<T extends Person>(person: T): T {
  return person;
}

var admin = new Admin("admin", "admin");

var p = personEcho(admin);
var pm = personEcho(new Manager("manager", ",mamager"));

var str = echo(1);
