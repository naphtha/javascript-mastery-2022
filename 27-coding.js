/**
 * Generci funct for hiding times
 * TEST DATA:
 *         Dolphins = 44, 23, 71
 *         Koalas = 65, 54, 49
 */

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const averageDolphinScore = calcAverage(44, 23, 71);
const averageKoalaScore = calcAverage(65, 54, 49);
// console.log(averageDolphinScore, averageKoalaScore);

// double score * 2

const checkWinner = function (dolphinAvg, koalaAvg) {
  if (dolphinAvg >= koalaAvg * 2) {
    return `Dolphins have won the competition`;
  } else if (koalaAvg >= dolphinAvg * 2) {
    return `Koala's have won the competition`;
  }

  return `No winner could be determined`;
};

console.log(checkWinner(averageDolphinScore, averageKoalaScore));
