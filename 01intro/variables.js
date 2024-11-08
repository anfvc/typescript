"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello Andres";
greetings.toLowerCase();
console.log(greetings);
//* Number
var userId = 3344;
userId.toFixed(); //TypeScript knows it is a number, no need to be redundant
// userId = "Andres" //* This won't work as TS knows it should expect a number
//* Boolean
var isLoggedIn = false;
//* Any
var hero;
function getHero() {
    return "Spider-man";
}
hero = getHero();
console.log(hero);
