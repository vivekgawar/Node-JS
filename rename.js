const fs = require('node:fs');

fs.rename("fileCreatedByNode.txt", "renamed.txt", function(err){
    if(err) console.error(err);
    else console.log("done");
})