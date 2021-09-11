const chalk = require('chalk');
const toHex = require('colornames');

function between(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const basicHues = ['red', 'green', 'blue'];
const basicLuminosities = ['light', 'dark'];
const randomHue = basicHues[between(0, 3)];
const randomLuminosity = basicLuminosities[between(0, 2)];

function colorify(par1, par2) {
  let tempColor = par2 + par1;
  // const theHue = par1; // User input? No, user input converted
  let theHex;
  let colorText;

  if (par1 && par2) {
    if (basicHues.indexOf(par1) > -1 && basicLuminosities.indexOf(par2) > -1) {
      if (par1 === 'red' && par2 === 'light') {
        // couldn't find lightred in css colors so used indianred instead
        theHex = toHex('indianred');
        colorText = `###############################
###############################
###############################
#####                     #####
#####      ${theHex}        #####
#####                     #####
###############################
###############################
###############################`;
        console.log(theHex);
        console.log(chalk.keyword('indianred')(colorText));
      } else if (basicHues.indexOf(par1) > -1) {
        tempColor = par2 + par1;
        theHex = toHex(tempColor);
        colorText = `###############################
###############################
###############################
#####                     #####
#####      ${theHex}        #####
#####                     #####
###############################
###############################
###############################`;
        console.log(chalk.keyword(tempColor)(colorText));
      } else {
        console.log('please enter one of the supported colors');
      }
    } else {
      console.log('please enter an appropriate color-luminosity combination');
    }
    // one input outcome:
  } else if (par1 && !par2) {
    if (basicHues.indexOf(par1) > -1) {
      tempColor = par1;
      theHex = toHex(tempColor);
      colorText = `###############################
###############################
###############################
#####                     #####
#####      ${theHex}        #####
#####                     #####
###############################
###############################
###############################`;
      console.log(chalk.keyword(tempColor)(colorText));
    } else {
      console.log('please enter one of the supported colors');
    }
  }
}

const para1 = process.argv[2];
const para2 = process.argv[3];
// colorify(para1, para2);
// colorify(randomHue, randomLuminosity);

if (!process.argv[2]) {
  colorify(randomHue, randomLuminosity);
} else {
  colorify(para1, para2);
}
