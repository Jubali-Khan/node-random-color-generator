const chalk = require('chalk');
const toHex = require('colornames');

function between(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const basicHues = ['red', 'green', 'blue'];
const basicLuminosities = ['light', 'dark'];
const randomHue = basicHues[between(0, 3)];
const randomReds = ['indianred', 'crimson', 'darkred', 'firebrick'];
const randomGreens = ['lawngreen', 'lightgreen', 'forestgreen', 'green'];
const randomBlues = ['deepskyblue', 'dodgerblue', 'mediumblue', 'navy'];
const randomLuminosity = basicLuminosities[between(0, 2)];

function colorify(hue, lumin) {
  let tempColor;
  let theHex;
  let colorText;

  if (hue && lumin) {
    // two input outcome
    if (lumin === 'light') {
      switch (hue) {
        case 'red':
          tempColor = randomReds[between(0, 2)];
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
          break;

        case 'green':
          tempColor = randomGreens[between(0, 2)];
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
          break;

        case 'blue':
          tempColor = randomBlues[between(0, 2)];
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
          break;

        default:
          break;
      }
    }
    // two input outcome
    else if (lumin === 'dark') {
      switch (hue) {
        case 'red':
          tempColor = randomReds[between(2, 4)];
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
          break;

        case 'green':
          tempColor = randomGreens[between(2, 4)];
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
          break;

        case 'blue':
          tempColor = randomBlues[between(2, 4)];
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
          break;

        default:
          break;
      }
    }

    //     tempColor = lumin + hue;
    //     theHex = toHex(tempColor);
    //     colorText = `###############################
    // ###############################
    // ###############################
    // #####                     #####
    // #####      ${theHex}        #####
    // #####                     #####
    // ###############################
    // ###############################
    // ###############################`;
    //     console.log(chalk.keyword(tempColor)(colorText));
  }
  // one input outcome:
  else if (hue && !lumin) {
    if (hue === 'red') {
      tempColor = randomReds[between(0, 4)];
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
    } else if (hue === 'green') {
      tempColor = randomGreens[between(0, 4)];
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
      tempColor = randomBlues[between(0, 4)];
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
    }

    //     theHex = toHex(hue);
    //     colorText = `###############################
    // #####                     #####
    // #####      ${theHex}        #####
    // #####                     #####
    // ###############################`;
    //     console.log(chalk.keyword(hue)(colorText));
  }
}

const para1 = process.argv[2];
const para2 = process.argv[3];

if (!process.argv[2]) {
  colorify(randomHue, randomLuminosity);
} else {
  colorify(para1, para2);
}
