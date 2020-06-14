var http = require("http")
var url = require("url")
http.createServer(function(req,res){
   var query = url.parse(req.url,true).query
   console.dir(query);
   res.writeHead(200,{'content-type':'text/plain'})
   var name = query.first ? query.first: "World";

   res.end("Hello, " + name + "!\n")
}).listen(8124)

