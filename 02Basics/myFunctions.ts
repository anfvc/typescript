function addTwo(number: number) {
  return number + 2;
}

function getUpper(value: string) {
  return value.toUpperCase();
}

function signUpUser(
  name: string,
  email: string,
  password: string,
  isPaid: boolean
) {}

//* arrow function with 3 params. How should defualt values be?
let loginUser = (
  name: string,
  email: string,
  isPaid: boolean = false /* after specifying the type, pass the default value */
) => {};

addTwo(10);
getUpper("andres");
signUpUser("Andres", "andres@mail.com", "hello123!", true);
loginUser("andres", "andres@mail.com");

export {};
