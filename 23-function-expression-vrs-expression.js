/**
 * A function written with the function keyword is called a function declaration
 */

/** This is a function declation */
function calcAge(birthYear) {
  return Date.now('YYYY') - birthYear;
}

console.log(calcAge(1994));

/**
 * Function Expression
 */

const calcAge2 = function (birthYear) {
  return 2022 - 1994;
};

console.log(calcAge2(1994));

/**
 * The main difference b/n function declaration and function expression is that
 * we can actually call function declarations before they are defined in the code
 *
 * This happens in a process called hoisting
 */
