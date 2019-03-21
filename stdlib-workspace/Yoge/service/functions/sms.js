const lib = require('lib');
var serv = lib.service
module.exports = (a = 0, b = 0, context, callback) => {
  return lib[`${context.service.identifier}.add`]({a: a, b: b}, (err, result) => {

    if (err) {
      return callback(err);
    }
    
    lib.utils.sms({
      to: '+972559729311',
      body: `sendBy:yogevShushan contents hello from my pc js project ${result}`,
    }, (err, result,serv) => {
      callback(err, result,serv);
      
    });

  });
};
