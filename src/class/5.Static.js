//The static keyword in JavaScript is used to define static properties and methods inside a class.
// These belong to the class itself, rather than instances of the class

//example

class Car {
  static brand = "Toyota"; // Static property
}

console.log(Car.brand); // ✅ Output: Toyota

const myCar = new Car();
console.log(myCar.brand); // ❌ Undefined (cannot access static properties on instances)

//example2
class MathUtil {
  static add(a, b) {
    return a + b;
  }
}

// Call the static method using the class name
console.log(MathUtil.add(10, 5)); // ✅ Output: 15

const obj = new MathUtil();
console.log(obj.add(10, 5)); // ❌ TypeError: obj.add is not a function

class Employee {
  static #name = "kamal";
  static age = 23;

  static set employeeName(name) {
    this.#name = name;
  }

  static printName() {
    console.log("the name is", Employee.#name);
  }
}

Employee.employeeName = "Amit";
Employee.printName();
