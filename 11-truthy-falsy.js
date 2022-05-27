/**
 * Falsy => values that are not exactly false but becomes false when we try to convert them into a boolean
 * In javascript there are only five falsy values '', 0, NaN, undefined, null
 */

/**
 * Falsy values => NaN, undefined, 0, '', null
 */

// Testing falsy values
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(300));
//NB: Type coercion on boolean values is done implicitly by javascript
// This truthy and falsy values are useful in if else statements. consider the code below

/**
 * because the age value is empty it evaluates to false
 */
let age = '';
if (age) console.log('Age is present !');

/**
 * Classical example of falsy in a typical if / else statement
 */

let height;

if (height) console.log('Height is defined and truthy');
else console.log('Hiehgt is Undefined, falsy value');
