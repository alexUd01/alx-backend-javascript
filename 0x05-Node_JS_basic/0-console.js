#!/usr/bin/node
// A function named displayMessage that prints in STDOUT the string argument.

module.exports = function displayMessage(...args) {
  console.log(args.join(' '));
};
