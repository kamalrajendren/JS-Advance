//A constructor in JavaScript is a special method inside a class
//that gets called automatically when a new object (instance) is created.
//It is typically used to initialize object properties.

class Student {
  #name;
  #age;

  constructor(name, age) {
    // a special method
    this.#name = name;
    this.#age = age;
  }

  printDescription() {
    console.log(`Hello! I'm ${this.#name} and i am ${this.#age} years old.`);
  }
}

const student1 = new Student("kamal", 23);
student1.printDescription();
