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
//enum example
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Sean",
    age: 30,
    hobbies: ["sports", "cooking"],
    role: Role.ADMIN
};
// person.role.push("admin");
var favoriteActivites;
favoriteActivites = ["football"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toLocaleLowerCase());
    //console.log(hobby.map()) !! Error because cant map through and arr of strings
}
if (person.role === Role.AUTHOR) {
    console.log("is author");
}
else {
    console.log("is not author its " + person.role);
}
