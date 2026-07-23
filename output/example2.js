"use strict";
const location2 = {
    x: 10,
    y: 20
};
console.log(location2["x"]); // Output: 10
const Players = [
    ["Alice", "Warrior", 100],
    ["Bob", "Mage", 80],
    ["Charlie", "Archer", 90]
];
console.log(Players[0]); // Output: ["Alice", "Warrior", 100]
console.log(Players[1][0]); // Output: "Bob"
const order = ["Laptop", 2, 1500];
console.log(order); // Output: ["Laptop", 2, 1500]
function divide(a, b) {
    const quotient = Math.floor(a / b);
    const remainder = a % b;
    return [quotient, remainder];
}
const result = divide(10, 3);
console.log(result); // Output: [3, 1]
// typescript enums
var Tcolors;
(function (Tcolors) {
    Tcolors["Red"] = "red";
    Tcolors["Green"] = "green";
    Tcolors["Yellow"] = "yellow";
})(Tcolors || (Tcolors = {}));
const t1 = {
    size: 42,
    color: Tcolors.Red
};
const t2 = {
    size: 38,
    color: Tcolors.Green
};
const t3 = {
    size: 40,
    color: Tcolors.Yellow
};
