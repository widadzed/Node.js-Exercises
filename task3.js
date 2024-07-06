const fs = require('fs');
fs.writeFile('welcome.txt' , 'hello node' , (err) =>{
    if (err) throw err ;
    console.log('welcome.txt created')
});
fs.readFile('welcome.txt' , 'utf8',(err,data)=>{
    if (err) throw err;
    console.log('data from welcome.txt', data);
})