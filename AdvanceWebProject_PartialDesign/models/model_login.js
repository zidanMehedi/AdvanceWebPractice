var db = require('./db');

module.exports ={
		getById: function(userid, callback){
		var sql = "select * from login where userid='"+userid+"'";
		db.getResult(sql, function(result){

			if(result.length > 0){
				callback(result[0]);
			}else{
				callback(null);
			}
		});
	},
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
	},
	update: function(user, callback){
		var sql = "update login set password='"+user.newPass+"'";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	}
}