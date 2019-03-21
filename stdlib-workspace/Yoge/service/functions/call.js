const lib = require('lib');

lib.yoge.bestTrekChar['@0.0.1']({name: 'spock'}, function (err, result) {

  if (err) {
    // handle it
  }

  // do something with result

});
module.exports = async (name = 'yogev') => {

  if (name === 'yogev') {
    return "name:yogev,lastName:shushan,country:israel,age:32";
  } else if (name === 'spock') {
    return 'hello and welcome to my wabApp"yogHERE"';
  } else {
    throw new Error('Only kirk and spock supported.');
  }

};