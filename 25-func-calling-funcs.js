/**
 * Calling one function inside another function
 */

function cutFruitPieces(fruit) {
  return fruit * 4; // one fruit when you cut it you get four
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  return `You just prepared a fruit with ${applePieces} pieces of apple
  and ${orangePieces} pieces of orange`;
}

console.log(fruitProcessor(3, 8));
