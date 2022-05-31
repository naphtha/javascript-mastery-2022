/**
 * A  function is a piece of code that we can reuse over and over aain
 * It allows us to create re-usable piece of code
 */

// Declaring a basic function
function logger() {
  console.log('My name is Daniel Narh');
}

/**
 * Calling, running, invoking, executing the function
 */
logger();

/**
 * Parameters are values that we pass to the function and they will get defined once we call the function
 * The return in a function is the result of executing the function
 */

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}
// if we want to store the value that is returned from a function we need to store it in a variable

const appleJuice = fruitProcessor(10, 3);
console.log(appleJuice);
