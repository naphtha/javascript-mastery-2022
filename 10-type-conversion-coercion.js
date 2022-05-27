/**
 * Type conversion is when we manually(explicitly) convert from one type to another
 * Type coercion is when javascript automatically convert types for us on the fly
 */

/**
 * NaN -> javascript gives us this response whenever an operation involved to produce a new number fails
 */

/**
 * Type conversion
 */
//Converting strings to
const brithYear = '2004';
const currentAge = 2022 - Number(brithYear);

console.log(currentAge);

// Converting age to a string
let age = 18;
age = String(18);

console.log(typeof age);

/**
 * Type conversion
 */
const message = 'Daniel is ' + 23 + ' years old';
console.log(message);

const result = '901' - '484'; // the  minus(-) sign triggers the coercion | the calculation
console.log(result);
