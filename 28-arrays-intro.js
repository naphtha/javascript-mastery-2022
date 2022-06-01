/**
 * The two most important data structure in javascript are arrays and objects
 *  Array is a data structures
 * An array can hold any data type
 * Arrays are zero based
 */

/**
 * Representing an array
 */
//Common way of representing an array
const friends = ['Derrick', 'Jonathan', 'Michael'];
//To get the first item in the friends array we do
console.log(friends[0]);
//Another way to do this ->
const crazyFriends = new Array('Aziz', 'Emmanuel');
console.log(crazyFriends);

//Checking the number of items in an array
// Note it is not zero-based even though it starts from zero
const totalFriends = friends.length;
console.log(totalFriends);

/**
 * How to get the last item in an array
 */

const lastElement = friends[friends.length - 1];
console.log('Last Friend -> ', lastElement);

// Reassigning an element in an array
/**
 * The reason why we can reassign values in an array defined with const is that
 * only primitive values are immutable but an array is not, so we can mutate it
 * We cannot replace or reassign an entire array. E.g friends = [1, 2, 3]
 */

friends[3] = 'Irene PoPo';
console.log(friends);

//An array that holds all kinds of information about an individual
// We can alson put arrays into other arrays

const greatFriends = friends.slice(0, 2);
console.log(greatFriends);

/**
 * We can function calls into an array just fine bkox they can produce a value
 */
