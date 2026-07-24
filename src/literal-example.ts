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