let fullName: string = "John Doe";
console.log(fullName.toUpperCase);


let age: number = 30;

console.log(age);

let projectCompleted: boolean = true;
console.log(projectCompleted);



const names: string[] = [];

names.push("Alice");
names.push("Bob"); 

console.log(names);


// type User = {
//     id: number;
//     name: string;
//     email: string;
// };

// const user: User = {    
//     id: 1,
//     name: "John Doe",
//     email: "john.doe@example.com"
// };

// const person: User = {
//     id: 2,
//     name: "Jane Smith",
//     email: "jane.smith@example.com"
// };

// console.log(user);
// console.log(person);


interface User  {
    id: number;
    name: string;
    email: string;
};

const user: User = {    
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com"
};

const person: User = {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com"
};

console.log(user);
console.log(person);