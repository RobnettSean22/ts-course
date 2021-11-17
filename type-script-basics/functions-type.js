"use strict";
// function add(n1: number, n2: number) {
//   return n1 + n2;
// }
// //use void if a value is not return instead of undefined
// function printResult(num: number) {
//   console.log("Result: " + num);
// }
// //void does tells you that what you want to be return will not be use. it doesnt stop you from returning anything`
// function addHandle(n1: number, n2: number, cb: (num: number) => void) {
//   const result = n1 + n2;
//   cb(result);
// }
// printResult(add(5, 12));
// //Funtion tpye is more discriptive about what function we want in there
// //below we are saying that combinedValues can hold a function with to arguments that are numbers that return a function
// let combinedValues: (a: number, b: number) => number;
// // combinedValues = add;
// /** thats why this function doesnt work
//  *  combinedValues = printResult;
//  */
// console.log(combinedValues(8, 8));
// // this shouldnt return anything because the function specified to tyoe coid
// addHandle(10, 30, (result) => {
//   console.log(result);
//   return result;
// });
