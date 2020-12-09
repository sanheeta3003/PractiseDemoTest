var http=require("http");
function process_request(req,res){
    res.write("hello from nodjs");
	switch(req.url){
		case "/":
		   res.end("hello");
		   break;
		case "/about":
		   res.end("about");
		   break;
		default:
		   res.end("default");
		   break;
		
	}
	console.log(req.url);
	//console.log(req);
    //res.end("hello world!");
	
}
var srv=http.createServer(process_request);
srv.listen(8181);
console.log("server is running on port 8181");