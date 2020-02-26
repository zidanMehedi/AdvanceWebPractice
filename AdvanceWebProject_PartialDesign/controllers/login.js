var express = require('express');
const model_login= require.main.require('./models/model_login');
var router = express.Router();

router.get('/',function(req,res){
	console.log('login page requested!');
	res.render('login/index');
});

router.post('/', function(req, res){
	var user={
		userid:req.body.userid,
		password:req.body.password
	}
	model_login.validate(user,function(results){
		if(results){
			res.cookie('username', req.body.userid);
			res.redirect('/home');
		}else{
			res.redirect('/login');
		}
	});
});

module.exports = router;