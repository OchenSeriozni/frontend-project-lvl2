#!/usr/bin/env node
import { Command } from 'commander';
const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-f, --format <type>',  'output format');

 function start(){
  program.parse();
 }

/*
const program = new Command();
 
program
< .... >
  .action((file1, file2) => genDiff(file1, file2))
  .parse(); 
 
*/
 export default start;