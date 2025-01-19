// Object creation
// An object in JavaScript is a collection of key-value pairs. An object can contain properties (values) and methods (functions) associated with the object.

const person = {
    name: "John",
    age: 30,

    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};
  
person.greet();

// Classes (ES6)
// In ES6, JavaScript introduced the class syntax, which is syntactic sugar over its prototype-based inheritance model. Classes are blueprints for creating objects with shared properties and methods.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
  
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
 
const person1 = new Person("Alice", 25);
person1.greet();  // Output: Hello, my name is Alice

// +---------------------------+ 4 PILLARS OF OOP +---------------------------+

// Pillar 1: Inheritance
// Inheritance allows one class to inherit the properties and methods of another class. In JavaScript, inheritance can be achieved through extends and the super() keyword.

class Animal {
    constructor(name) {
       this.name = name;
    }
  
    speak() {
       console.log(`${this.name} makes a sound.`);
    }
}
  
class Dog extends Animal {
    constructor(name, breed) {
        super(name);  // Call the parent class constructor
        this.breed = breed;
    }
  
    speak() {
        console.log(`${this.name} barks.`);
    }
}
  
const dog = new Dog("Max", "Bulldog");
dog.speak();  // Output: Max barks.
  
// Pillar 2: Encapsulation
// Encapsulation refers to the bundling of data (properties) and methods that operate on that data within one unit or class. In JavaScript, you can encapsulate data by using private and public properties. Though ES6 doesn't have true private fields (without some tricks), you can simulate it using conventions or # syntax (introduced in ES2022).

class Car {
    #engineStatus = "off";  // Private field
  
    startEngine() {
        this.#engineStatus = "on";
        console.log("Engine started.");
    }
  
    stopEngine() {
        this.#engineStatus = "off";
        console.log("Engine stopped.");
    }
  
    getEngineStatus() {
        return this.#engineStatus;
    }
}
  
const myCar = new Car();
myCar.startEngine();    // Output: Engine started.
console.log(myCar.getEngineStatus());  // Output: on

// Pillar 3: Polymorphism
// Polymorphism allows different objects to respond to the same method in their own way. In JavaScript, this is typically achieved through method overriding, where a subclass provides its own version of a method defined in the parent class.

class Shape {
    area() {
      throw "Method not implemented!";
    }
}
  
class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    area() {
      return Math.PI * this.radius ** 2;
    }
}
  
class Square extends Shape {
    constructor(side) {
      super();
      this.side = side;
    }
  
    area() {
      return this.side ** 2;
    }
}
  
const circle = new Circle(5);
console.log(circle.area());  // Output: 78.53981633974483
  
const square = new Square(4);
console.log(square.area());  // Output: 16
  
//  Pillar 4: Abstraction
// Abstraction hides the complexity of the system and only exposes the necessary parts to the user. In JavaScript, this can be done by defining methods in a class to provide a simplified interface, while the internal implementation remains hidden.

class BankAccount {
    #balance = 0;
  
    deposit(amount) {
      if (amount > 0) {
            this.#balance += amount;
        } else {
            console.log("Deposit amount must be positive.");
        }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
      } else {
        console.log("Insufficient balance or invalid amount.");
      }
    }
  
    getBalance() {
      return this.#balance;
    }
}
  
const account = new BankAccount();
account.deposit(100);
console.log(account.getBalance());  // Output: 100
account.withdraw(50);
console.log(account.getBalance());  // Output: 50

// Summary of Key Concepts in OOP in JavaScript:

// Objects: Basic data structures to hold key-value pairs.
// Classes: Templates for creating objects, introduced in ES6.
// Inheritance: Mechanism where one class inherits properties and methods from another class.
// Encapsulation: Bundling data and methods to operate on that data in one class, restricting access to private members.
// Polymorphism: The ability of different classes to implement the same method in different ways.
// Abstraction: Hiding the complex implementation details and exposing only the necessary parts.
  