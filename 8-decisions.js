/**
 * if else statements are used to make decisions
 */

const eligibleAge = 18;
const currentAge = 12;

if (currentAge > eligibleAge) {
  console.log('You are not qualified to drive');
} else {
  const remainingYears = eligibleAge - currentAge;
  console.log(`You will qualify in the next ${remainingYears} years`);
}
