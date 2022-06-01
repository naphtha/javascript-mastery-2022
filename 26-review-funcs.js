/**
 * Function parameters are local to the func
 * -1 is a standard number in programming that shows us this has no meaning
 * Is good to return -1 since we receive a numeric input type and the final is not accurate
 * Whenever a return is hit in a function it immediately exits the function
 * Anything beneath the return keyword in a func will simply not be executed
 *
 * NB: Return statements exits the function
 */

const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

const yearsUntilRetirement = function (birthYear) {
  const retirement = 60 - calcAge(birthYear);
  if (retirement > 0) {
    return retirement;
  }
  return -1;
};

console.log(yearsUntilRetirement(1960));

/**
 * Three different kinds of function
 * 1. Function Declaration
 * 2. Function Expression
 * 3. Arrow function
 */
