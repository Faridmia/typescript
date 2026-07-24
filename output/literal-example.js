"use strict";
// type Colors = 'red' | 'green' | 'blue';
const Users = [];
let lastId = 0;
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
