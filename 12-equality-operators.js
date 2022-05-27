/**
 * Equality operators used for making comparisons
 * They are used to check two values and the final evaluates to true, false
 */

/**
 * === strict equality => it does not perform type coercion
 * == the equality operator actually does type coercion
 * As a general rule always use the strict equality as much as you can.
 * For clean code purposes in order to avoid unexpected consequences
 */

//Testing strict equality
const age = 18;
if (age === 18) console.log('You have become an adult 🤪');

//Testing equality
/**
 * == is also called loose equality
 */
let currentAge = '20';
if (currentAge === 20) {
  console.log('Loose Equality 😡');
}

/**
 * Run in a browser console
 * Create a guesing game
 */
// const favouriteNumber = prompt('What is your favourite number? ');
// if (favouriteNumber === 28) console.log('You are a billonaire');

/**
 * Strict not qual => !==
 * Loose not equal => !=
 */

if (23 !== '23') console.log('Not equal');

//NB: In all cases make sure you use the strict operator
