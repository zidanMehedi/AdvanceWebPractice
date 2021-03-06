var db = require('./db');

module.exports ={
	getById: function(id, callback){
		var sql = "select * from topic where tid=?";
		db.getResult(sql, [id], function(result){

			if(result.length > 0){
				callback(result[0]);
			}else{
				callback(null);
			}
		});
	},
	getByUname: function(name, callback){
		var sql = "select * from topic where name=?";
		db.getResult(sql, [name], function(result){
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback(null);
			}
		});
	},
	getAll:function(callback){
		var sql = "select * from topic";
		db.getResult(sql, null, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback(null);
			}
		});
	},
	/*insert: function(topic, callback){
		var sql = "insert into topic values (?,?,?,?)";
		db.execute(sql, [null,topic.uname,topic.password,topic.type], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},*/
	/*delete: function(id, callback){
		var sql = "delete from topic where id=?";
		db.execute(sql, [id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},*/
	/*update: function(topicUpdate, callback){
		var sql = "update topic set topicname=?, password=? where id=?";
		db.execute(sql,[topicUpdate.uname,topicUpdate.password,topicUpdate.id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	}*/
}