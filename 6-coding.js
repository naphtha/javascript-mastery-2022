/**
 * Using TEST DATA 1
 * markWeight = 78kg, markHeight = 1.69m
 * johnWeight= 92kg, johnHeight= 1.95m
 */

/**
 * Using TEST DATA 2
 * markWeight = 95kg, markHeight = 1.88m
 * johnWeight= 85kg, johnHeight= 1.76m
 */

/**
 * BMI calculation using TEST DATA1
 */

const markWeight = 78;
const markHeight = 1.69;

const markBMI = markWeight / markHeight ** 2;

console.log('Mark BMI test data 1 => ', markBMI);

const johnWeight = 92;
const johnHeight = 1.95;

const johnBMI = johnWeight / johnHeight ** 2;
console.log('John BMI using test data 1 => ', johnBMI);

const markHigherBMI = markBMI > johnBMI;
console.log('Is mark BMI higher test data 1 => ', markHigherBMI);
