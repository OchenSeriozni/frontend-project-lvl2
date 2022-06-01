
const gendiff = require('../src/index.js');

test('test .JSON', () => {
    const file1 = './test/json/file1.json';
    const file2 = './test/json/file2.json';
    
    const resultTest1 = ["- follow:false ", "  host:hexlet.io ", "- proxy:123.234.53.22 ", "+ timeout:20 ", "- timeout:50 ", "+ verbose:true "];
    const resultTest2 = ["+ follow:false ", "  host:hexlet.io ", "+ proxy:123.234.53.22 ", "- timeout:20 ", "+ timeout:50 ", "- verbose:true "];
    
    const test1=gendiff(file1,file2)
    const test2=gendiff(file2,file1)

    expect(test1.split('\n')).toStrictEqual(resultTest1);
    expect(test2.split('\n')).toStrictEqual(resultTest2);
  });

  test('test .yml', () => {
    const file1 = './test/yml/file1.yml';
    const file2 = './test/yml/file2.yml';
    
    const resultTest1 = ["- follow:false ", "  host:hexlet.io ", "- proxy:123.234.53.22 ", "+ timeout:20 ", "- timeout:50 ", "+ verbose:true "];
    const resultTest2 = ["+ follow:false ", "  host:hexlet.io ", "+ proxy:123.234.53.22 ", "- timeout:20 ", "+ timeout:50 ", "- verbose:true "];
    
    const test1=gendiff(file1,file2)
    const test2=gendiff(file2,file1)

    expect(test1.split('\n')).toStrictEqual(resultTest1);
    expect(test2.split('\n')).toStrictEqual(resultTest2);
  });
