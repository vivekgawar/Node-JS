const { log } = require('node:console');
const fs = require('node:fs');

fs.copyFile("renamed.txt", "./CopyFolder/copy.txt", function(err){
    if(err) console.log(err.message);
    else console.log("done!");
})
