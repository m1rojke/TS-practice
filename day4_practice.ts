// Задача 1
class Car {
  brand: string;
  model: string;
  year: number;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  getInfo() {
    return `${this.brand} ${this.model} (${this.year})`;
  }
}

const car = new Car("BMW", "X5", 2020);
console.log(car.getInfo());

// Задача 2
class BankAccount {
  private balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  public deposit(amount: number): void {
    this.balance += amount;
  }

  public withdraw(amount: number): void {
    amount <= this.balance
      ? (this.balance -= amount)
      : console.log("Недостаточно средств!");
  }

  public getBalance() {
    return `Ваш баланс ${this.balance}`;
  }
}

const bank = new BankAccount(3500);
bank.deposit(3500);
console.log(bank.getBalance());
bank.withdraw(7000);
console.log(bank.getBalance());

// Задача 3
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak() {
    return `${this.name} says`;
  }
}

class Dog extends Animal {
  say: string;

  constructor(name: string, say: string) {
    super(name);
    this.say = say;
  }

  speak() {
    return `${super.speak()} - ${this.say}`;
  }
}

class Cat extends Animal {
  say: string;

  constructor(name: string, say: string) {
    super(name);
    this.say = say;
  }

  speak() {
    return `${super.speak()} - ${this.say}`;
  }
}

const dog = new Dog("Dog", "Woof!");
const cat = new Cat("Cat", "Meow!");
console.log(dog.speak());
console.log(cat.speak());

// Задача 4
class Product {
  public amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  private calculateTax() {
    return this.amount * 1.2;
  }

  public getPrice() {
    return this.calculateTax();
  }
}

const prod = new Product(1000);
console.log(prod.getPrice());

// Задача 5
class Person {
  protected email: string;

  constructor(email: string) {
    this.email = email;
  }

  getEmail() {
    return `${this.email}`;
  }
}

class Employee extends Person {
  employee: string;

  constructor(email: string, employee: string) {
    super(email);
    this.employee = employee;
  }

  getEmail() {
    return `Сотрудник: ${this.employee}, email: ${super.getEmail()}`;
  }
}

const employee = new Employee("m1rojke@yandex.ru", "Максим");
console.log(employee.getEmail());

// Задача 6
class Temperature {
  private celsius: number = 0;

  get fahrenheit(): number {
    return this.celsius * 9/5 + 32;
  }

  set fahrenheit(value: number) {
    this.celsius = (value - 32) * 5/9;
  }
}

const temp = new Temperature();
temp.fahrenheit = 32;
console.log(temp.fahrenheit);