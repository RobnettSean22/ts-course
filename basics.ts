/**core types in TypeScript
 * number
 * string
 * boolean
 * object
 * arrs (flexible/strict)
 * Tuple (fixed length and fixed type arr)
 *   Tuple type ex:[number,string]
 * Enuum enum{NEW,OLD} automaticaly enumerated global constant indentifiers
 *  assigns labels to numbers
 * Any
 */
// adding a colon after a value to input a type
const add = (n1: number, n2: number, showResult: boolean, phrase: string) => {
  //checks if parameters are numbers is not fun this is regular javascript
  //   if (typeof n1 === "number" && typeof n2 === "number") {
  //     return n1 + n2;
  //   } else {
  //     throw new Error("incorrect input");
  //   }
  const result = n1 + n2;
  if (showResult) {
    console.log(resultPhrase + result);
  } else {
    return n1 + n2;
  }
};

const number1 = 5;

const number2 = 10;

const printResult = true;

const resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase);
