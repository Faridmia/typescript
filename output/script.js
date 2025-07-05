import { Player } from "./classes/Player.js";
console.log("hello typesript..");
const country = "Bangladesh";
console.log(country);
// Explicit Types
function donationfrom(name, amount) {
    if (name.length > 0 && amount > 0) {
        console.log(`Donar name is ${name} amount ${amount}`);
        return true;
    }
    return false;
}
donationfrom("farid mia", 1000);
function getAgeInfo(age) {
    if (typeof age === "number") {
        return `User is ${age} years old`;
    }
    else {
        return `User's birth year is probably ${age}`;
    }
}
console.log(getAgeInfo(25));
console.log(getAgeInfo("1998"));
function handleUserInput(input) {
    if (typeof input === "string") {
        console.log("User typed:", input.toUpperCase());
    }
    else if (typeof input === "number") {
        console.log("User gave number:", input.toFixed(2));
    }
    else {
        console.log("Unknown input type");
    }
}
handleUserInput("hello");
handleUserInput(123.456);
function printInfo(info) {
    console.log("Info:", info);
}
printInfo("Donor Farid");
printInfo(500);
function greet() {
    console.log("👋 Hello how are you?");
}
greet();
function greetUser(name) {
    console.log(`👋 Hello, ${name}!`);
}
greetUser("Farid Mia");
function add(a, b) {
    return a + b;
}
let total = add(10, 20);
console.log("মোট:", total); // 30
function sayHi(name) {
    if (name) {
        console.log(`Hi, ${name}`);
    }
    else {
        console.log("Hi, Stranger!");
    }
}
sayHi(); // Hi, Stranger!
sayHi("Enric"); // Hi, Enric
function multiply(x, y = 2) {
    return x * y;
}
console.log(multiply(5)); // 10
console.log(multiply(5, 3)); // 15
const subtract = (a, b) => {
    return a - b;
};
console.log(subtract(10, 3)); // 7
function printValue(value) {
    console.log("Value is:", value);
}
printValue("Donation");
printValue(1000);
let multiplier;
multiplier = function (a, b) {
    return a * b;
};
console.log(multiplier(5, 3)); // 15
const mashrafi = new Player("Mashrafi", 40, "bangladesh");
mashrafi.play();
