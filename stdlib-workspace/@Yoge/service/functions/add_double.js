const lib = require('lib');

module.exports = async (a = 0, b = 0, context) => {
  let result = await lib[`${context.service.identifier}.add`]({a: a, b: b});
  return result * 2;
};