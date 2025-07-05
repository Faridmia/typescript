console.log("hello typesript..");

const country = "Bangladesh";

console.log(country);

// Explicit Types

function donationfrom(name: string, amount: number): boolean {
  if (name.length > 0 && amount > 0) {
    console.log(`Donar name is ${name} amount ${amount}`);
    return true;
  }

  return false;
}

donationfrom("farid mia", 1000);

function getAgeInfo(age: number | string): string {
  if (typeof age === "number") {
    return `User is ${age} years old`;
  } else {
    return `User's birth year is probably ${age}`;
  }
}

console.log(getAgeInfo(25));
console.log(getAgeInfo("1998"));
