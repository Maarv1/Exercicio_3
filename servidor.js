var fs = require("fs")
var http = require("http")

http.createServer(function(req,res){
    fs.readFile("dados.html", function(err, data){
        res.write(data)
        return res.end()
    })
    
}).listen(8001)