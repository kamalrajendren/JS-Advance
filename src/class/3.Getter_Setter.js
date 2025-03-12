//setter & getter
//syntax

//  setter_name (param) {
//  this.value = param
// }

//  getter_name () {
//  return return_value
// }

class Student {
  set studentName(name) {
    if (typeof name !== "string") throw new Error("invalid name");
    this.name = name;
  }

  get studentNameWithId() {
    return this.name + "123";
  }

  print() {
    console.log("name :", this.name);
  }
}

const student1 = new Student();
student1.studentName = "kamal";
console.log(student1.studentNameWithId);

