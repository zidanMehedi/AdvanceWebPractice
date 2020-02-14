var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
	console.log('login page requested!');
	res.render('home');
});


module.exports = router;