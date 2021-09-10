const logger = require('node-color-log');
const toHex = require('colornames');

function between(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
const basicHues = ['red', 'green', 'blue'];
const randomHue = basicHues[between(0, 3)];

const hex = toHex(randomHue);
const text = `###############################
###############################
###############################
#####                     #####
#####      ${hex}        #####
#####                     #####
###############################
###############################
###############################`;

logger.color(randomHue).log(text);
