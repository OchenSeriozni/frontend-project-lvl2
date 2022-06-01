#!/usr/bin/env node
const {Command} = require('commander');
const genDiff = require ('./index.js')
const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((file1, file2) => console.log(genDiff(file1, file2)))
  .option('-f, --format <type>',  'output format');

 function start(){
  program.parse();
 }


 module.exports = start;