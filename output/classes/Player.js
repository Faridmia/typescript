export class Player {
    // name: string;
    // age: number;
    // country: string;
    // constructor(n: string, a: number, c: string) {
    //   this.name = n;
    //   this.age = a;
    //   this.country = c;
    // }
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing..`);
    }
}
function drawRectangle(options) {
    let width = options.width;
    let height = options.length;
}
let threedOptions = {
    width: 20,
    length: 10,
    height: 30,
};
drawRectangle(threedOptions);
