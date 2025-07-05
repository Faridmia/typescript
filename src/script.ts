import { Player } from "./classes/Player.js";
console.log("hello typesript..");

const country = "Bangladesh";

console.log(country);

// Explicit Types

function donationfrom(name: string, amount: number): boolean {
  if (name.length > 0 && amount > 0) {
    console.log(`Donar name is ${name} amount ${amount}`);
    return true;
  }

  return false;
}

donationfrom("farid mia", 1000);

function getAgeInfo(age: number | string): string {
  if (typeof age === "number") {
    return `User is ${age} years old`;
  } else {
    return `User's birth year is probably ${age}`;
  }
}

console.log(getAgeInfo(25));
console.log(getAgeInfo("1998"));

function handleUserInput(input: unknown) {
  if (typeof input === "string") {
    console.log("User typed:", input.toUpperCase());
  } else if (typeof input === "number") {
    console.log("User gave number:", input.toFixed(2));
  } else {
    console.log("Unknown input type");
  }
}

handleUserInput("hello");
handleUserInput(123.456);

function printInfo(info: string | number) {
  console.log("Info:", info);
}

printInfo("Donor Farid");
printInfo(500);

function greet(): void {
  console.log("👋 Hello how are you?");
}

greet();

function greetUser(name: string): void {
  console.log(`👋 Hello, ${name}!`);
}

greetUser("Farid Mia");

function add(a: number, b: number): number {
  return a + b;
}

let total = add(10, 20);
console.log("মোট:", total); // 30

function sayHi(name?: string): void {
  if (name) {
    console.log(`Hi, ${name}`);
  } else {
    console.log("Hi, Stranger!");
  }
}

sayHi(); // Hi, Stranger!
sayHi("Enric"); // Hi, Enric

function multiply(x: number, y: number = 2): number {
  return x * y;
}

console.log(multiply(5)); // 10
console.log(multiply(5, 3)); // 15

const subtract = (a: number, b: number): number => {
  return a - b;
};

console.log(subtract(10, 3)); // 7

function printValue(value: string | number): void {
  console.log("Value is:", value);
}

printValue("Donation");
printValue(1000);

let multiplier: (x: number, y: number) => number;

multiplier = function (a, b) {
  return a * b;
};

console.log(multiplier(5, 3)); // 15

const mashrafi = new Player("Mashrafi", 40, "bangladesh");

mashrafi.play();
