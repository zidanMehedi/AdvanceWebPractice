const express = require('express');
router = express.Router();


router.get('/',function(req,res){res.render('reg/index');});
router.post('/',function(req,res){res.redirect('/login');});

module.exports = router;