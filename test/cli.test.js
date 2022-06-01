
const gendiff = require('../src/index.js');

test('test #1', () => {
    const file1 = './test/file1.json';
    const file2 = './test/file2.json';
    
    const resultTest1 = ["- follow:false ", "  host:hexlet.io ", "- proxy:123.234.53.22 ", "+ timeout:20 ", "- timeout:50 ", "+ verbose:true "];
    const resultTest2 = ["+ follow:false ", "  host:hexlet.io ", "+ proxy:123.234.53.22 ", "- timeout:20 ", "+ timeout:50 ", "- verbose:true "];
    
    const test1=gendiff(file1,file2)
    const test2=gendiff(file2,file1)

    expect(test1.split('\n')).toStrictEqual(resultTest1);
    expect(test2.split('\n')).toStrictEqual(resultTest2);
  });
