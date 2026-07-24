"use strict";
// type Colors = 'red' | 'green' | 'blue';
const Users = [];
let lastId = 0;
// function addUser( user: Omit<User2, 'id'>): User2 {
//   lastId++;
//   const newUser: User = {
//     ...user,
//     id: ++lastId
//   }
//   Users.push(newUser);
//   return newUser;
// }
function addUser(user) {
    lastId++;
    const newUser = {
        ...user,
        id: ++lastId
    };
    Users.push(newUser);
    return newUser;
}
addUser({ name: 'John Doe', email: 'john.doe@example.com' });
console.log(Users); // Output: [{ id: 1, name: 'John Doe', email: 'tsc
// generic function
const fruits = ['apple', 'banana', 'orange'];
const numbers = [1, 2, 3, 4, 5];
function getFirstElement(arr) {
    return arr[0];
}
console.log(getFirstElement(fruits.map(fruit => fruit.toUpperCase()))); // Output: 'APPLE'
console.log(getFirstElement(numbers.map(n => n.toFixed(2)))); // Output: '1.00'
