#!/usr/bin/env node

var edich = require('../index');
var pkg = require('../package.json');
var input = process.argv[2];

function help(){
  console.log(pkg.description);
  console.log('');
  console.log('Usage');
  console.log(' $ edich <name>');
  console.log('');
  console.log('Example');
  console.log(' $ edich express'); 
}

if (process.stdin.isTTY) {
  if (!input) {
    help();
    return;
  }
  edich(input);
}