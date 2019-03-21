const lib = require('lib');

module.exports = (a = 0, b = 0, context, callback) => {
  return lib[`${context.service.identifier}.add`]({a: a, b: b}, (err, result) => {

    if (err) {
      return callback(err);
    }

    lib.utils.sms({
      to: '+972559729311',
      body: `התחתנתי ב -19-3-2019: ${result}`
    }, (err, result) => {
      callback(err, result);
    });

  });
};