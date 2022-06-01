const path = require('path')
const _ = require('lodash');
const  fs = require( 'node:fs');
const parse = require('./parsFile')

function gendiff(pathFile1,pathFile2){

const newPathFile1 = fs.readFileSync(pathFile1)
const newPathFile2 = fs.readFileSync(pathFile2)

const typeFile1 = path.extname(pathFile1).substring(1);
const typeFile2 = path.extname(pathFile2).substring(1);

const file1 = parse(newPathFile1,typeFile1)
const file2 = parse(newPathFile2,typeFile2)

const arrFile1=[];
const arrFile2=[];


_.forIn(file1,function(value, key) {
  arrFile1.push(`${key}:${value} `)
})
_.forIn(file2,function(value, key) {
  arrFile2.push(`${key}:${value} `)
})


const rest = [...new Set([...arrFile1,...arrFile2])].sort()

const result= rest.map((item)=>{
  if(arrFile1.includes(item) && arrFile2.includes(item)){
    return `  ${item}`
  }
  else if(arrFile1.includes(item)){
    return `- ${item}`
  }
  return `+ ${item}`
})
return result.join('\n');

}

module.exports= gendiff;

