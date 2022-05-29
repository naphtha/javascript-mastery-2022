/**
 * Allows us to write if else statements all on one line
 * It is also called the conditional operator
 * Perfect when we need to make quick decisions
 */

// We can use ternary operator in template literal because it produces a value

const age = 18;
const message =
  age > 18 ? 'Capable of drinking wine 🍷' : 'Just drink water 💧';

console.log(message);

const isVerified = true;

const output = `I love ${isVerified ? 'Doreen Mensah' : 'me'}`;
console.log(output);
