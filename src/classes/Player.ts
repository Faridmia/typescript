import { IsPlayer } from "../interfaces/isPlayer.js";
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

export class Player implements IsPlayer {
  constructor(
    public name: string,
    public age: number,
    readonly country: string
  ) {}

  play() {
    console.log(`${this.name} from ${this.country} is playing..`);
  }
}
