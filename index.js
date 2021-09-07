const clc = require('cli-color');

console.log(clc.red('Text in red'));

if (process.argv[2] !== '') {
  if (process.argv[2] !== 'ask') {
    if (process.argv[3]) {
      // 2 inputs outcome
    } else {
      // 1 input outcome
    }
  } else {
    // ask outcome
  }
} else {
  // random color outcome
}
