const http = require("http");

const server = http.createServer(function(req, res){
    res.end("Hello World!")
})
server.listen(3001)

// search localhost:3001 on your browser and you'll see Hello World!