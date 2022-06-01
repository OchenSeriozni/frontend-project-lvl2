#!/usr/bin/env node
import { Command } from 'commander';
import genDiff from './index.mjs'
const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((file1, file2) => genDiff(file1, file2))
  .option('-f, --format <type>',  'output format');

 function start(){
  program.parse();
 }


 export default start;