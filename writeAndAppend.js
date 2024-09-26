const fs = require('node:fs');

fs.writeFile("fileCreatedByNode2.txt", "Content 2", function(err){
    if(err) console.error(err);
    else console.log("done");
})

fs.appendFile("fileCreatedByNode2.txt", "\n Content 3", function(err){
    if(err) console.error(err);
    else console.log("done");
})