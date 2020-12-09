var http=require("http");
var m=require("./formmodule")
var fs=require("fs");
var qstring=require("querystring");
var url=require("url");

function process_request(req,resp){
    const p=url.parse(req.url);
	console.log("query string : "+p.query)
	console.log("path : "+p.path);
	console.log(req.url);
	switch(p.pathname){
		case "/":
		     fs.readFile("formdata.html",function(err,data){
				 if(err){
					    resp.end("error");
						console.log("error");
				 }else{
					 resp.end(data);
				 }
			});
			break;
		case "/calc":
		     var d=qstring.parse(p.query)
			 console.log("in calc");
			 console.log(d.num1,d.num2);
			 var ans=m.addition(d.num1,d.num2);
			 resp.end("Addition : "+ans );
			 break;
             		
	}
}

var srv=http.createServer(process_request);
srv.listen(8181);
console.log("server running on port 8181");