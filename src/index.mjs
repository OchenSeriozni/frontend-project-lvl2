import _ from 'lodash';
import fs from 'node:fs'


export default function gendiff(pathFile1,pathFile2){

const newPathFile1 = fs.readFileSync(pathFile1)
const newPathFile2 = fs.readFileSync(pathFile2)

const file1 = JSON.parse(newPathFile1)
const file2 = JSON.parse(newPathFile2)

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
return console.log(result.join('\n'));
}


