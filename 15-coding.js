/**
 * Q1. Average calculation
 */
const averageScoreForDolphins = (96 + 108 + 89) / 3;
const averageScoreForKoalas = (88 + 91 + 110) / 3;
console.log('Dolphins Score => ', averageScoreForDolphins);
console.log('Koalas Score => ', averageScoreForKoalas);

/**
 * Q2 Winner Declaration just using average score
 */
if (averageScoreForDolphins > averageScoreForKoalas) {
  console.log('Dolphins have won the competition');
} else if (averageScoreForDolphins === averageScoreForKoalas) {
  console.log('Both teams have drawn');
} else {
  console.log('Koalas have won the competition');
}

/**
 * Q3. Winner declaration with a minimum of atleast 100 points
 */

if (
  averageScoreForDolphins > averageScoreForKoalas &&
  averageScoreForDolphins >= 100
) {
  console.log('Dolphins have a min score of atleast 100 and has won');
} else if (
  averageScoreForKoalas > averageScoreForDolphins &&
  averageScoreForKoalas >= 100
) {
  console.log('Koalas have won and has a min score of 100');
} else if (
  averageScoreForDolphins === averageScoreForKoalas &&
  averageScoreForDolphins >= 100 &&
  averageScoreForKoalas >= 100
) {
  console.log('Both teams have drawn, with a scores above minimum');
} else {
  console.log('No winner determined');
}
