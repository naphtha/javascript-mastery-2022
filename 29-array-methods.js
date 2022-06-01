/**
 * Array methods can be thought of as array operations
 */

/**
 *1.  push -> adds element to the end of the array
 * It also returns the length of the new array
 *  most of the time we do not need the newLength but incase we need it we do not have to do that in another code or line
 */
const friends = ['Derrck', 'Ama', 'Jones', 'Patrick'];
const newLenghth = friends.push('Jacob');
console.log('New Length -> ', newLenghth);
console.log(friends);

/**
 * 2. unshift -> Adds a new element to the begining of the array
 * It also returns the length of the new array
 */

friends.unshift('Daniel');
console.log(friends);

/**
 * REMOVING ELEMENTS
 * 1. pop -> removes last item in list -> It also returns the removed element
 * 2. shift -> removes first item in list -> It also returns the removed element
 */

// Using pop
const lastItem = friends.pop();
console.log(lastItem, friends);

//using shift
const firstItem = friends.shift();
console.log(firstItem, friends);

/**
 * indexOf - use to get the position index of an item
 * If we fail to ge the item in the array we will get -1
 */

console.log(friends.indexOf('Derrick'));

/**
 * includes - returns true or false based on the element presence in the array
 * It uses strict equality for this check
 * This is a more modern method than the indexOf
 * Very useful for conditionals
 */

console.log(friends.includes('Derrick')); // check if derrick is in array
