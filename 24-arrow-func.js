/**
 * An arrow is a shorter form of function expression that is shorter to write
 */

// Good for one liner functions the return is implicit
// An example arrow function
const calcAge = (birthYear) => 2022 - birthYear;

/**
 * Arrow funtions for long block of code
 * We do an explicit return
 */

/**
 * Arrow function do not get the this keyword
 */

const yearsUntilRetirement = (birthYear) => {
  const age = 2022 - birthYear;
  const retirement = 60 - age;
  return `You have ${retirement} years to your retirement. You need to work hard`;
};
console.log(yearsUntilRetirement(1994));
