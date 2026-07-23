// export class Player {
//   // name: string;
//   // age: number;
//   // country: string;
//   // constructor(n: string, a: number, c: string) {
//   //   this.name = n;
//   //   this.age = a;
//   //   this.country = c;
//   // }
//   constructor(
//     private name: string,
//     public age: number,
//     readonly country: string
//   ) {}
//   play() {
//     console.log(`${this.name} from ${this.country} is playing..`);
//   }
// }
export class Player {
    name;
    age;
    country;
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing..`);
    }
}
