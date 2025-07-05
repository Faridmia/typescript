"use strict";
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
