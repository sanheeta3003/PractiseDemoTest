var users=[{name:"user1",pass:"pass1"},{name:"user2",pass:"pass2"},{name:"user3",pass:"pass3"}]
exports.checkUser=function(user,pass){
	for(var i=0;i<users.length;i++){
		if((user==users[i].name) && (pass==users[i].pass)){
			return true;
		}
	}
	return false;
}