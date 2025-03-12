// # (hash symbol) is used to declare private fields and methods
//fields and methods can only be accessed within the class itself

class Employee {
  #name = "vimal";

  

  set employeeName(name) {
    this.#name = name;
  }

  print() {
    console.log("employee name is,", this.#name);
  }

  printAge(dob) {
    console.log(this.#calculateAge(dob));
  }

  #calculateAge(dob) {
    const [, , year] = dob.split("/");
    console.log("year :", year);
    const today = new Date();
    return today.getFullYear() - Number(year);
  }
}

const employee1 = new Employee();
// employee1.#name = 'kamal'  // will throw error cause it's private field
// employee1.#calculateAge('01/01/2022') // will throw error cause it's private field

employee1.employeeName = "kamal";
employee1.printAge('01/01/2002')

