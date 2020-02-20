var db = require('./db');

module.exports ={
	getById: function(userid, callback){
		var sql = "select * from users where userid='"+userid+"'";
		db.getResult(sql, function(result){

			if(result.length > 0){
				callback(result[0]);
			}else{
				callback(null);
			}
		});
	},
	validate: function(user, callback){
		var sql = "select * from users where userid='"+user.userid+"' and password='"+user.password+"'";
		db.getResult(sql, function(result){
			if(result.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	getAll:function(callback){
		var sql = "select * from users";
		db.getResult(sql, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback(null);
			}
		});
	},
	insert: function(user, callback){
		var sql = "INSERT INTO users (`id`, `userid`, `fname`, `lname`, `email`, `contact`, `dept`, `cgpa`, `credit`) VALUES ('','"+user.userid+"','"+user.fname+"','"+user.lname+"','"+user.email+"','"+user.contact+"','"+user.dept+"','"+user.cgpa+"','"+user.credit+"')";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	delete: function(user, callback){
		var sql = "delete from user values()...........";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	update: function(user, callback){
		var sql = "update users set fname='"+user.fname+"', lname='"+user.lname+"', contact='"+user.contact+"', dept='"+user.dept+"', cgpa='"+user.cgpa+"', credit='"+user.credit+"' where userid='"+user.userid+"'";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	}
}