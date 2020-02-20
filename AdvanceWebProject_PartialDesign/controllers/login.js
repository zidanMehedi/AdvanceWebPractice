var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
	console.log('login page requested!');
	res.render('login/index');
});

router.post('/', function(req, res){
	
	if(req.body.uname!='' && req.body.password!=''){

		//req.session.username = req.body.uname;
		res.cookie('username', req.body.uname);
		//console.log(req.cookies['username']);
		res.redirect('/home');
	}
});

module.exports = router;