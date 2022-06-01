/**
 * Test data -> 125, 555, 44
 */

function calcTip(bill) {
  let tip;
  if (bill >= 50 && bill <= 300) {
    tip = bill * 0.15;
  } else {
    tip = bill * 0.2;
  }

  return tip;
}

console.log('Test value -> ', calcTip(100));

const tips = [calcTip(125), calcTip(555), calcTip(44)];
const totalTip = [calcTip(125) + 125, calcTip(555) + 555, calcTip(44) + 44];

console.log('Tips -> ', tips);

console.log('Array total', totalTip);
