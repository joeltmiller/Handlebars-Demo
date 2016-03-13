var express = require('express');
var router = express.Router();

var users = [{name:"Joel", email:"joel@primeacademy.io"}, {name:"Kristy", email:"Kristy@primeacademy.io"}, {name:"Mark", email:"mark@primeacademy.io"}]


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'For real it works', body:"<h1>Handlebars!</h1>" });
});

router.get('/users', function(req, res, next){
  res.render('users', { users: users })
})

module.exports = router;
