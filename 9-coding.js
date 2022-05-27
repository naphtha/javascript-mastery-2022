const markWeight = 78;
const markHeight = 1.69;
const markBMI = markWeight / markHeight ** 2;
// console.log('Mark BMI test data 1 => ', markBMI);

const johnWeight = 92;
const johnHeight = 1.95;
const johnBMI = johnWeight / johnHeight ** 2;
// console.log('John BMI using test data 1 => ', johnBMI);

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
} else {
  console.log(`John's BMI is higher than Mark`);
}
