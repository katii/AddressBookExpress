var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.register = function(req,res){
    res.render("registerUser",{});
}

router.usersview = function(req,res){
    res.render("loggedView",{});
}

module.exports = router;
