//Polymorphism allows methods to have different implementations based on the object calling them.
// Using extend Key

class Animal {
  sound() {
    console.log("animal sound");
  }
}

class Dog extends Animal {
  sound() {
    console.log("woof! woof!");
  }
}

class Cat extends Dog {
  sound() {
    console.log("meow! meow!!");
  }
}

const animal = new Animal();
const dog = new Dog();
const cat = new Cat();

animal.sound();
dog.sound();
cat.sound();
