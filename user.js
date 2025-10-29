var express = require('express');
var router = express.Router();

let factor = 2;
let current = 25;

/* GET users listing. */
router.get('/', function(req, res, next) {
  current *= factor;
  res.send(`Current is: ${current}`);
});

module.exports = router;
