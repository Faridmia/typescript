// type Colors = 'red' | 'green' | 'blue';

// let myColor: Colors = 'red'; // Valid
// let myOtherColor: Colors = 'green'; // Valid
// let myThirdColor: Colors = 'blue'; // Valid


// console.log(myColor); // Output: red
// console.log(myOtherColor); // Output: green
// console.log(myThirdColor); // Output: blue

type User2 = {
  id?: number;
  name: string;
  email: string;
};

const Users: User2[] = [];

let lastId : number = 0;

// function addUser( user: Omit<User2, 'id'>): User2 {
//   lastId++;
//   const newUser: User = {
//     ...user,
//     id: ++lastId
    
//   }
//   Users.push(newUser);
//   return newUser;
// }

function addUser( user: User2): User2 {
  lastId++;
  const newUser: User = {
    ...user,
    id: ++lastId
    
  }
  Users.push(newUser);
  return newUser;
}

addUser({ name: 'John Doe', email: 'john.doe@example.com' });

console.log(Users); // Output: [{ id: 1, name: 'John Doe', email: 'tsc



// generic function

const fruits: string[] = ['apple', 'banana', 'orange'];

const numbers: number[] = [1, 2, 3, 4, 5];

function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

console.log(getFirstElement(fruits.map(fruit => fruit.toUpperCase()))); // Output: 'APPLE'
console.log(getFirstElement(numbers.map(n => n.toFixed(2)))); // Output: '1.00'