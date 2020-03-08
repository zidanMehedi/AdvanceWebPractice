var express = require('express');
var router = express.Router();
const model_topic= require.main.require('./models/model_topic');
const model_group= require.main.require('./models/model_group');
const model_user= require.main.require('./models/model_user');

router.get('/createGroup',function(req,res){
	if(req.cookies['username']!=null)
	{
		model_group.getById(req.cookies['username'],function(results){
			if(results==null){
				res.render('createGroup/myGroup',{name:req.cookies['username'], user:results});
						//console.log(results);
			}else{
				res.render('createGroup/myGroup',{name:req.cookies['username'], user:results});
			}
				//console.log(results);
			});
		console.log('topic page requested!');
		
		
	}else{
		res.redirect('/logout');
	}
});

router.get('/',function(req,res){
	if(req.cookies['username']!=null)
	{
		model_group.getByGroupId(req.cookies['username'],function(results){
		if(results!=null){
				model_group.getById(req.cookies['username'],function(resultss){
			//console.log(resultss[0].tid);
			model_topic.getById(resultss[0].tid,function(result){
				res.render('createGroup/myGroup',{name:req.cookies['username'], user:results, topic:result});
				console.log(result);
			});
		});
		}else{
			res.redirect('/group/createGroup')
		}
		//console.log(results);
		});
		console.log('topic page requested!');
		
		
	}else{
		res.redirect('/logout');
	}
});

router.post('/createGroup',function(req,res){
	if(req.cookies['username']!=null)
	{
		model_group.getMaxId(function(results){
			user={
				userid:req.cookies['username'],
				groupId:(results[0].group_id+1)
			}
			console.log(user);
			model_group.getById(req.cookies['username'],function(results){
				if(results==null){
					model_group.insert(user,function(results){
						res.redirect('/group');
						//console.log(results);
					});
				}else{
					res.send('You Have Group');
				}
				//console.log(results);
			});
			
		});	
		
		console.log('topic page requested!');
		
		
	}else{
		res.redirect('/logout');
	}
});

router.post('/addMember',function(req,res){
	if(req.cookies['username']!=null)
	{
			model_group.getById(req.cookies['username'],function(results){
				
				if(results!=null){
					user={
					groupId:results[0].group_id,
					topicId:results[0].tid,
					external:results[0].external,
					userid:req.body.addmember
				}
				model_group.insert(user,function(results){
						res.redirect('/group');
						//console.log(results);
					});
				console.log(user);
			}else{
				res.redirect('/group/createGroup');
			}
			});
		
		console.log('topic page requested!');
		
		
	}else{
		res.redirect('/logout');
	}
});

/*router.get('/topicDetails/:id',function(req,res){
	if(req.cookies['username']!=null)
	{
		model_topic.getById(req.params.id,function(results){
		res.render('topics/topicDetails',{name:req.cookies['username'], user:results});
		console.log(results);
		});
		console.log('topic page requested!');
		
		
	}else{
		res.redirect('/logout');
	}
});*/

/*router.post('/',function(req,res){
	if(req.cookies['username']!=null)
	{
		var data={
		name: req.cookies['username']
		}
		console.log('login page requested!');
	
		res.render('home',data);
	}else{
		res.redirect('/logout');
	}
});*/


module.exports = router;