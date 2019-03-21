/**
* A basic Hello World function
* @param {string} name Who you're saying hello to
* @param {number} age how old is he 
* @param {string} email your email address
* @param {string} tel you cell num 
*@returns {string}
* 
*/
module.exports = async (name = 'yogev',age = 32,email ="yogev1520@gmail.com",tel = "+972559729311", context) => {
  return `hello ${name},your age${age},your mail${email},your cell number${tel},`;

};

console.log("https://yoge.api.stdlib.com/service@dev/");
console.log("to update the api you need(lib up dev)");
//links for my inv on wab 
var addFunc = "https://Yoge.api.stdlib.com/service@dev/add/"
var add_doubleFunc = "https://Yoge.api.stdlib.com/service@dev/add_double/";
var callFunc = "https://Yoge.api.stdlib.com/service@dev/call/";
var smsFunc = "https://Yoge.api.stdlib.com/service@dev/sms/";

console.log(`func in lib for now ${addFunc},
${add_doubleFunc},
${callFunc},
${smsFunc}`);