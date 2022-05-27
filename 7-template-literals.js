/**
 * Template literals are useful in embedding variables into a strin of text
 * We use the back ticks in js ``
 * Useful in writing multi-line statements
 * We can perform js calculations inside of them
 */

const firstName = 'Narh';
const lastName = 'Kpodo';
const dob = 1994;
const now = 2022;

const fullName = `${firstName} ${lastName} and am ${now - dob} years old `;
console.log(fullName);
