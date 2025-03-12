//Using super we can access and update the constructor of parent class

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   detail() {
//     console.log(`Hello this is ${this.name} and I'm ${this.age} years old`);
//   }
// }

// class Programmer extends Person {
//   constructor(name, age, id) {
//     super(name, age); //sending properties to parent constructor
//     this.id = id;
//   }

//   printId() {
//     console.log("My id is ", this.id);
//   }
// }

// const programmer1 = new Programmer("kamal", 23, "1234");
// programmer1.detail();
// programmer1.printId();

class Person {
  static name = "Kamal";
  #password = "";

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  set setPassWord(password) {
    this.#password = password;
  }

  static showDetails() {
    if (this.password == "user124") {
      console.log(`Hello, your name is ${this.name} and age is ${this.age}`);
    } else {
      console.log("WRONG PASSWORD !!!");
    }
  }
}

class Programmer extends Person {
  constructor(name, age, id) {
    super(name, age); //sending properties to parent constructor
    this.id = id;
  }

  showLoginInfo() {
    this.showDetails();
    console.log("id is ", this.id);
  }
}

const programmer1 = new Programmer("kamal", 23, "1234");
programmer1.setPassWord = "user2124";
programmer1.showLoginInfo();
