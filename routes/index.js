var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nengyun Zhang' });
});


router.post('/submitmsg', function(req, res) {
  var msg = {
    name: req.body.vname,
    email: req.body.vemail,
    subject: req.body.vsubject,
    message: req.body.vmessage,
  };

  console.log(msg);
  res.redirect('/');
});

module.exports = router;
