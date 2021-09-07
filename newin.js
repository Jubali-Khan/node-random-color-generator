'use strict';

const kuler = require('kuler');
// const str = kuler('foo', '#FF6600');
const colorspace = require('colorspace');
// console.log(colorspace('color')) // #6b4b3a
// console.log(colorspace('color:space')) // #796B67

// let hexCode = colorspace(process.argv[2]);
// console.log(typeof hexCode);

function between(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// define arrays for the hues (less specific)

let redArray = ['#b14444', '#6c0000', '#8b2222'];
let greenArray = ['#76dd3a', '#164c0e', '#3da32d'];
let blueArray = ['#0074c5', '#00188a', '#4757a7'];
let yellowArray = ['#dbf200', '#7e8800', '#98a029'];
let blackArray = ['#000000', '#000000', '#000000'];
let whiteArray = ['#FFFFFF', '#FFFFFF', '#FFFFFF'];
let orangeArray = ['#ff9d00', '#6a4100', '#a7711b'];

// define an array for light hues (more specific)

let lightHues = [
  '#b14444',
  '#76dd3a',
  '#0074c5',
  '#dbf200',
  '#000000',
  '#FFFFFF',
  '#ff9d00',
];

// define an array for dark hues (more specific)

let darkHues = [
  '#6c0000',
  '#164c0e',
  '#00188a',
  '#7e8800',
  '#000000',
  '#FFFFFF',
  '#6a4100',
];

// random? random array with all hues and randomizer

let allHues = [
  '#6c0000',
  '#164c0e',
  '#00188a',
  '#7e8800',
  '#000000',
  '#FFFFFF',
  '#6a4100',
  '#b14444',
  '#b14444',
  '#0074c5',
  '#dbf200',
  '#000000',
  '#FFFFFF',
  '#ff9d00',
];

function oneInput(par) {
  // let col;
  let hex = colorspace(par + ':space');

  console.log(kuler(`some text with ${hex}`, colorspace(par + ':space')));
}
// switch (par) {
//   case 'red':
//     col = redArray[between(0, 3)];
//     console.log(kuler(`text ${col}`, redArray[between(0, 3)]));
//     break;
//   case 'green':
//     col = greenArray[between(0, 3)];
//     console.log(kuler(`text ${col}`, greenArray[between(0, 3)]));
//     break;
//   case 'blue':
//     col = blueArray[between(0, 3)];
//     console.log(kuler(`text ${col}`, blueArray[between(0, 3)]));
//     break;
//   case 'yellow':
//     col = yellowArray[between(0, 3)];
//     console.log(kuler(`text ${col}`, yellowArray[between(0, 3)]));
//     break;
//   case 'black':
//     col = blackArray[between(0, 3)];
//     console.log(kuler(`text ${col}`, blackArray[between(0, 3)]));
//     break;
//   case 'white':
//     col = whiteArray[between(0, 3)];
//     console.log(kuler(`text ${col}`, whiteArray[between(0, 3)]));
//     break;
//   case 'orange':
//     col = orangeArray[between(0, 3)];
//     console.log(kuler(`text ${col}`, orangeArray[between(0, 3)]));
//     break;
//   default:
//     col = allHues[between(0, 14)];
//     console.log(kuler(`text ${col}`, allHues[between(0, 14)]));
//     break;

// whats up with not being able to use let or const in each fucking case?
//   }
// }

oneInput(process.argv[2]);

// That is it: I wasted too much time with the wrong package while having understood the issue's requirement differently than what was meant. Then I found the packages that would solve all the problems, only to find out that one of them doesn't function properly. So now I have the program logic almost figured out, but don't have one of the necessary tools to get the job done.

// if (process.argv[2]) {
//   if (process.argv[2] === 'ask') {
//     // ask outcome
//   } else if (process.argv[2] !== 'ask') {
//     if (process.argv[3]) {
//       // 2 inputs outcome
//     } else {
//       // 1 input outcome
//       console.log(oneInput(process.argv[2]));
//     }
//   }
// } else {
// }
