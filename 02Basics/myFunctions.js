"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(number) {
    return number + 2;
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
