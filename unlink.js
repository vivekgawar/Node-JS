const fs = require('node:fs');

fs.unlink("renamed.txt", function(err){
    if(err) console.error(err);
    else console.log("removed");
})

// rmdir --> only allows to delete empty folders
// will give error if it is not empty
// to still delete the folder, write code as follows 

fs.rmdir("./CopyFolder",{recursive:True} , function(err){
    if(err) console.error(err);
    else console.log("removed");
})

