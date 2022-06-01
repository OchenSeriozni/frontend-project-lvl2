const yaml = require('js-yaml');
//import ini from 'ini';

const parsers = {
  json: JSON.parse,
  yml: yaml.load,
  //ini: ini.parse,
};

const parse = (data, type) => parsers[type](data);

module.exports=parse;