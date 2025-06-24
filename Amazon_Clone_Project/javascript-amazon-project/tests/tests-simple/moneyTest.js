import {formatCurrency} from '../../scripts/utils/money.js'

// We practice AUTOMATED TESTING here
// The situation you are testing for is called TESTING

console.log('-- TEST SUITE: formatCurrency() --')
console.log('TEST 1- Converts cents to dollars:')
if (formatCurrency(2095) === '20.95'){
  console.log('passed');
} else {
  console.log('failed');
}

console.log('TEST 2- Converts cents to dollars (0 edge case):')
if (formatCurrency(0) === '0.00'){
  console.log('passed');
} else {
  console.log('failed');
}

console.log('TEST 3- Converts cents to dollars (rounds up to nearest cent):')
if (formatCurrency(2000.5) === '20.01'){
  console.log('passed');
} else {
  console.log('failed');
}

