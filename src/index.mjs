import _ from 'lodash';
import fs from 'node:fs'

const pathFile1 = fs.readFileSync('../test/file1.json')
const pathFile2 = fs.readFileSync('../test/file2.json')

const file1 = JSON.parse(pathFile1)
const file2 = JSON.parse(pathFile2)

function gendiff(file1,file2){
const arrFile1=[];
const arrFile2=[];

// формируем массив строк
_.forIn(file1,function(value, key) {
  arrFile1.push(`${key}:${value} `)
})
_.forIn(file2,function(value, key) {
  arrFile2.push(`${key}:${value} `)
})

// формируем массив уникальных значений
const rest = [...new Set([...arrFile1,...arrFile2])].sort()

//определяем какие данные к какому файлу пренадлежат (минус - File1, плюс - File2, Пусто - Данные есть и в File1 и в File2)
const result= rest.map((item)=>{
  if(arrFile1.includes(item) && arrFile2.includes(item)){
    return `  ${item}`
  }
  else if(arrFile1.includes(item)){
    return `- ${item}`
  }
  return `+ ${item}`
})
console.log(result.join('\n'))
}

  
