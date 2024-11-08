function addTwo(number: number): number /* this should return a number */ {
  return number + 2;
  // return "hello"; //if I pass a string, why is it right? //* We need to specify the type of the function
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

//* Returning more than one type:
// function getValue(myVal: number): boolean {
//   if (myVal > 5) {
//     return true;
//   }

//   return "200 OK";
// }

const getHello = (s: string): string => {
  return "";
};

const heroes = ["thor", "spider-man", "ironman"]; //TS will expect a string
// const heroes = [1, 2, 3]; //TS will expect a number

//!No need to specify the type
heroes.map((hero /* : string */): string => {
  return `Hero is ${hero}`;
});

function consoleError(errormsg: string): void {
  console.log(errormsg);
  return;
}

function handleError(errormsg: string): never {
  throw new Error(errormsg)
}

export {};
