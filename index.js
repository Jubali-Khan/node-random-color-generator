const clc = require('cli-color');

// if (process.argv[2]) {
//   if (process.argv[2] === 'ask') {
//     // ask outcome
//   } else if (process.argv[2] !== 'ask') {
//     if (process.argv[3]) {
//       // 2 inputs outcome
//     } else {
//       // 1 input outcome
//       let color = process.argv[2];
//       switch (color) {
//         case 'red':
//           console.log(clc.red('text'));
//           break;
//         default:
//           console.log('please enter one of the 10 hues available next time');
//       }
//     }
//   }
// } else {
//   // random color outcome

// }
// console.log(Math.floor(Math.random() * 4));

function between(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(between(0, 4));

const randomColor = clc.xterm(between(0, 40));
console.log(randomColor('text')); // why does it work here and not throw randomColor is not a function??
