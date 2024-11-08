let greetings: string = "Hello Andres";
greetings.toLowerCase();
console.log(greetings)


//* Number

let userId = 3344
userId.toFixed() //TypeScript knows it is a number, no need to be redundant
// userId = "Andres" //* This won't work as TS knows it should expect a number

//* Boolean
let isLoggedIn: boolean = false;


//* Any

let hero: string;

function getHero() {
  return "Spider-man"
}

hero = getHero()













export {};
