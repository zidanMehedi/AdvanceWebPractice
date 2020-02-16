var express = require('express');
var router = express.Router();


router.get('/',function(req,res){
	if(req.cookies['username']!=null)
	{
		var data={
		name: req.cookies['username']
		}
		console.log('changePassword page requested!');
	
		res.render('changePassword',data);
	}else{
		res.redirect('/logout');
	}
});

router.post('/',function(req,res){
	if(req.cookies['username']!=null)
	{
		var data={
		name: req.cookies['username']
		}
		console.log('changePassword page requested!');
	
		res.render('changePassword',data);
	}else{
		res.redirect('/logout');
	}
});
module.exports = router;