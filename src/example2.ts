interface DatabaseConfig {
    host: string;
    port: number;
    username: string;
    password: string;
}

interface Appconfig {
    appName: string;
    version: string;
    debug: boolean;
    port: number;
    database: DatabaseConfig;
    features: {
        registration: boolean;
        darkMode: boolean;
    };
}


type Point = {
    x: number;
    y: number;
}; // typle alias for a point in 2D space


const location2 : Point = {
    x: 10,
    y: 20
};

console.log(location2["x"]); // Output: 10


type Player = [string, string, number];  

const Players: Player[] = [
    ["Alice", "Warrior", 100],
    ["Bob", "Mage", 80],
    ["Charlie", "Archer", 90]
];

console.log(Players[0]); // Output: ["Alice", "Warrior", 100]
console.log(Players[1][0]); // Output: "Bob"

type OrderItem = readonly [string, number, number]; // [itemName, quantity, price]

const order: OrderItem = ["Laptop", 2, 1500];

console.log(order); // Output: ["Laptop", 2, 1500]

type Division = [ number, number]; // [quotient, remainder]

function divide( a: number, b: number ): Division {
   const quotient = Math.floor(a / b);
   const remainder = a % b;
   return [quotient, remainder];      
}

const result = divide(10, 3);
console.log(result); // Output: [3, 1]


// typescript enums

enum Tcolors {
    Red = "red",
    Green = "green",
    Yellow = "yellow"
}

type Teeshirt = {
    size: number,
    color: Tcolors
};

const t1: Teeshirt = {
    size: 42,
    color: Tcolors.Red
};

const t2: Teeshirt = {
    size: 38,
    color: Tcolors.Green
};

const t3: Teeshirt = {
    size: 40,
    color: Tcolors.Yellow
}



