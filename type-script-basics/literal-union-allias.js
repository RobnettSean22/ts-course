"use strict";
// //create custom types with alis
// //allows you to save code and write code quicker
// type Combinable = number | string;
// type ConversionDescriptor = "as-number" | "as-text";
// const combine = (
//   input1: Combinable,
//   input2: Combinable,
//   resultConversion: ConversionDescriptor
// ) => {
//   let result;
//   //run time type check (sometimes needed)
//   if (
//     (typeof input1 === "number" && typeof input2 === "number") ||
//     resultConversion === "as-number"
//   ) {
//     // made clear that here always work with numbers
//     result = +input1 + +input2;
//   } else {
//     //here that always work with strings
//     result = input1.toString() + input2.toString();
//   }
//   // if (resultConversion === "as-number") {
//   //   return +result;
//   // } else {
//   //   result = input1.toString() + input2.toString();
//   // }
//   return result;
// };
// const combineAges = combine(30, 26, "as-number");
// console.log(combineAges);
// const combineStringAges = combine("30", "26", "as-number");
// console.log(combineStringAges);
// const combineNames = combine("sean", "aya", "as-text");
// console.log(combineNames);
