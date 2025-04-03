//https://github.com/kamalrajendren/JS-Advance.git

//structure
class class_name {
  // body
}

// classes may contains fields(variables inside class) or methods
//Example

//1. Fields

//1. Define class
class Employee {
  age = 20;
  name = 'kamal'
}

//2. call class using new Keyword
const employee = new Employee()
employee.name = "vimal"
console.log("employee 1",employee.name)

const employee2 = new Employee()
console.log("employee 2",employee2.name)