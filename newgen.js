const logger = require('node-color-log');
const toHex = require('colornames');

function between(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const basicHues = ['red', 'green', 'blue'];

// random colors scenario: if (!process.argv[2])
if (!process.argv[2]) {
  const randomHue = basicHues[between(0, 3)];
  const randomHex = toHex(randomHue);
  const randomColorText = `###############################
###############################
###############################
#####                     #####
#####      ${randomHex}        #####
#####                     #####
###############################
###############################
###############################`;
  logger.color(randomHue).log(randomColorText);
}
