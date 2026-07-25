"use strict";
const data = new Set();
data.add("apple");
data.add("banana");
data.add("orange");
console.log(data.has("banana")); // true
console.log(data.size); // 3
const players2 = new Map();
players2.set(1, "Alice");
players2.set(2, "Bob");
players2.set(3, "Charlie");
console.log(players2.get(1)); // "Alice"
console.log(players2.size); // 3
const orders3 = new Map();
function addOrder(juice) {
    const quantity = orders3.get(juice) || 0;
    orders3.set(juice, quantity + 1);
}
addOrder("apple");
addOrder("banana");
addOrder("apple");
console.log(orders3.get("apple")); // 2
console.log(orders3.get("banana"));
