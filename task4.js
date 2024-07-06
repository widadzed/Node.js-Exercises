const generatepassword = require ('generate-password');
const password = generatepassword.generate({
    length:10 ,
    Number : true,
});
console.log('generate password',password);