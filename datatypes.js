/**
 * In JavaScript every value is either a primitive datatype or an object ({})
 * There are 7 primitive datatypes in js
 */

/**
 * 1. Number
 * let age = 23
 */

/**
 * 2. String
 * const username = 'Narh'
 */

/**
 * 3. Bolean
 * e.g isVerified = true
 */

/**
 * 4. Undefined -> Value taken by a variable that is not yet defined or empty value
 * e.g let basicSalary;
 */

/**
 * 5. Null -> An empty value
 * e.g let currentDuration = null
 */

/**
 * 6. Symbol -> Value that is unique that cannot be changed
 */

/**
 * 7. Bigint -> Values that are to large to be represented by the number datatypes
 */

/** NB: JavaScript is a dynamically typed language meaning we do not have to define the datatype when we store a value
 * Datatypes are determined automatically
 */

/**
 * To determine the type of data we use a built-in function called typeof
 */
// Checking the datatype
let isActive = true;
console.log(typeof isActive);

// When an empty value is defined it holds the value of undefined
let year;
console.log(year);
console.log(typeof year);

/**
 * A common bug in javascript is checking typeof null -> it should give you null but it spills object
 */

let message;
const age = 19;

if (age < 18) message = 'Minor';
if (age > 18) message = 'Adult';

console.log(message);
