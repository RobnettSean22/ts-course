/**TS looks for key  pairvalue types not key value pairs */

//describing the object in detail with types bad practice except when it comes to Tuples
// const person: { name: string; age: number } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; //this tells typescript want an arr with exactly to elements 1st being number 2nd being string;
// } = {
//   name: "Sean",
//   age: 30,
//   hobbies: ["sports", "cooking"],
//   role: [2, "author"],
// };

// const ADMIN =0
// const READ_ONLY = 1
// const AUTHOR = 2

//enum example {5, 6,7} incrementing numbers
enum Role {
  ADMIN = 5,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Sean",
  age: 30,
  hobbies: ["sports", "cooking"],
  role: Role.ADMIN,
};

// person.role.push("admin");

for (const hobby of person.hobbies) {
  console.log(hobby.toLocaleLowerCase());
  //console.log(hobby.map()) !! Error because cant map through and arr of strings
}

if (person.role === Role.AUTHOR) {
  console.log("is author");
} else {
  console.log("is not author its " + person.role);
}
