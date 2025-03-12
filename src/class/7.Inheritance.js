//extent keyword

class Parent {
  static name = "vimal";
  static age = 20;

  constructor(name, age) {
    Parent.name = name;
    Parent.age = age;
  }

  static printParentDetails1() {
    console.log(`I'm ${Parent.name} and I'm ${Parent.age}`);
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name, age);
  }

  static printParentDetail2() {
    console.log(`I'm ${Parent.name} and I'm ${Parent.age}`);
  }

}


Child.printParentDetails1()








// Child.printParentDetail1(); // will throw error only staic field/method can be called like this
// const person = new Child("kamal", 23);
// person.printParentDetails();
