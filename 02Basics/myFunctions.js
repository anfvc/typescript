"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(number) {
    return number + 2;
    // return "hello"; //if I pass a string, why is it right? //* We need to specify the type of the function
}
function getUpper(value) {
    return value.toUpperCase();
}
function signUpUser(name, email, password, isPaid) { }
//* arrow function with 3 params. How should defualt values be?
var loginUser = function (name, email, isPaid /* after specifying the type, pass the default value */) {
    if (isPaid === void 0) { isPaid = false; }
};
addTwo(10);
getUpper("andres");
signUpUser("Andres", "andres@mail.com", "hello123!", true);
loginUser("andres", "andres@mail.com");
//* Returning more than one type:
// function getValue(myVal: number): boolean {
//   if (myVal > 5) {
//     return true;
//   }
//   return "200 OK";
// }
var getHello = function (s) {
    return "";
};
var heroes = ["thor", "spider-man", "ironman"]; //TS will expect a string
// const heroes = [1, 2, 3]; //TS will expect a number
//!No need to specify the type
heroes.map(function (hero /* : string */) {
    return "Hero is ".concat(hero);
});
//? Don't return anything - void
function consoleError(errormsg) {
    console.log(errormsg);
    return;
}
//? never - to never return an error
function handleError(errormsg) {
    throw new Error(errormsg);
}
