/**
 * Operator precedence tells js how the order of operations be performed
 * Those with higher operator precedence are executed first
 * e.g in console.log(100-10 > 90-90) the calculations are performed first before the comparison
 * This is because the - operator has a higher precedence over the >
 * Google mdn operator precedence
 */

/**
 * Groupings : Used as parenthesis () have higher operator precedence over all other operators
 */

let nelsonAge = 18;
let danielAge = 22;
// we want to add ages first before diving so this is wrong
const averageAge = nelsonAge + danielAge / 2;
console.log(averageAge);
