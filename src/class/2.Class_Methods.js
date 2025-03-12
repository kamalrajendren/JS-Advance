//1. Define class
// class Employee {
//     age = 20;
//     name = 'kamal'
// }

// add methods

class Employee {
  age = 20;
  name = "kamal";

  print() {
    console.log(this.employeeName);
  }
}

const employee = new Employee();
employee.employeeName = "kamal";

employee.print();
