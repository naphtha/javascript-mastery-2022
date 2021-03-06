/**
 * Switch statements are useful when we have multiple test cases
 */

const dayoftheWeek = 'Wednesday';

switch (
  dayoftheWeek // It uses a strict === to check the dayOfTheWeek value
) {
  case 'Monday':
    console.log('Getting ready to go to work');
    break;
  case 'Tuesday':
    console.log('Practice coding');
    break;
  case 'Wednesday':
  case 'Thursday':
    console.log('Distribute food in the neighbourhood');
    break;
  case 'Friday':
    console.log('Prepare for sabbath');
    break;
  case 'Saturday':
    console.log('Go to church');
    break;
  case 'Sunday': {
    // You can include the curly braces or ignore since automatically it accepts multiple statements
    console.log('Rest day and movies');
    break;
  }
  default:
    console.log('No activity to be performed 🤪 Invalid day');
}

/**
 * Rewriting above statement in if else if else block
 */

// if (day === 'Monday') {
// } else if (day === 'Tuesday') {
// } else if (day === 'Wednesday' || day === 'Thursday') {
// } else if (day === 'Friday') {
// } else if (day === 'Saturday') {
// } else if (day === 'Sunday') {
//   console.log('Rest day!!!');
// } else {
//   console.log('Invalid  day');
// }
