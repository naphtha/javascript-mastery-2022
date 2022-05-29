/**
 * When tip is greater than 50 and less than or equal to 300 tip is 15% otherwise tip is 20%
 */

/**
 * b/n 50 and 300 => (bill >= 300 && bill <= 50)
 */
const bill = 275;

const output =
  bill >= 50 && bill <= 300
    ? `The bill was ${bill}, the tip was ${bill * 0.15}, and total value is ${
        bill + 0.15 * bill
      }`
    : `The bill was ${bill}, the tip was ${0.2 * bill}, and total value is ${
        bill + 0.2 * bill
      }`;

console.log(output);
