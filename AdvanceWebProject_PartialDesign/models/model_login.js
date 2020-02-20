var db = require('./db');

module.exports ={
	validate: function(user, callback){
		var sql = "select * from login where userid='"+user.userid+"' and password='"+user.password+"'";
		db.getResult(sql, function(result){
			if(result.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	insert: function(user, callback){
		var sql = "INSERT INTO login (`id`, `userid`, `password`) VALUES ('','"+user.userid+"','1234')";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	}
}