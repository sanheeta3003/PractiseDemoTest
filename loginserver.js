var http=require("http");
var url=require("url");
var qstring=require("querystring");
var fs=require("fs");
var m=require("./loginmodule");
function process_request(req,resp){
  var p=url.parse(req.url);
  switch(p.pathname){
  case "/":
     fs.readFile("login.html",function(err,data){
	    if(err){
		   resp.end("error");
		}else{
		   resp.end(data);
		}
	 });
     break;
  case "/login":
     var bdata="";
     req.on("data",function(d){
		   bdata+=d.toString();
		   console.log("data"+bdata);
	 });
	 req.on("end",function(){
		 console.log("end"+bdata);
         var d=qstring.parse(bdata);
	     var ans=m.checkUser(d.nm,d.pass);
	     if(ans){
		    resp.end("success");
		 
	     }
	     else{
		  resp.end("failure");
		 
	 }});
    break;
   
  }


}
var srv=http.createServer(process_request);
srv.listen(8181);
console.log("server started");