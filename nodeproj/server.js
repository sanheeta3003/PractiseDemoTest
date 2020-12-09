var http=require("http");
var qstring=require("querystring");
var url=require("url");
var fs=require("fs");


function process_request(req,res)
{
    var p=url.parse(req.url);

    
        fs.readFile("form.html",function(err,data)
        {
            if(err)
            {
                console.log("error");
            }
            else{
                res.end(data);
            }
        });
       
}

var srv=http.createServer(process_request);
srv.listen(8181);
console.log("Server Started ");