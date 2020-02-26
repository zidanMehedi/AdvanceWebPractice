var express = require('express');
const model_user= require.main.require('./models/model_user');
var router = express.Router();

router.get('/',function(req,res){
	if(req.cookies['username']!=null)
	{
		console.log('login page requested!');
		model_user.getById(req.cookies['username'],function(results){
			console.log(results);
			res.render('home/index',{user:results});
		});
	}else{
		res.redirect('/logout');
	}
});

router.post('/',function(req,res){
	if(req.cookies['username']!=null)
	{
		console.log('login page requested!');
		var user={
			userid:req.cookies['username'],
			fname:req.body.fname,
			lname:req.body.lname,
			email:req.body.email,
			dept:req.body.dept,
			cgpa:req.body.cgpa,
			credit:req.body.credit,
			contact:req.body.contact
		}
		model_user.update(user,function(results){
			if(status){
				res.redirect('/home');
			}else{
				
			}
		});
	}else{
		res.redirect('/logout');
	}
});


module.exports = router;