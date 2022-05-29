/**
 * Strict mode is a special mode in js which makes it easier for us
 * to write secure javascript code
 * We implement this writing 'use strict' @ the top of our document
 * It prevents accidental errors
 * Strict mode forbids us to do certain things
 * Without strict mode javascript will fail silently
 */

'use strict';

/**
 * Creating an error on purpose
 */

let hasDriverLicense = true;
let canDrive = false;

if (hasDriversLicense) {
  //this will spill an error
  canDrive = true;
  console.log('Great, I can drive');
}
