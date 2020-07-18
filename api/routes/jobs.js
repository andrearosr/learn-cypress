var express = require('express');
var fetch = require('node-fetch');
var router = express.Router();

/* GET jobs listing. */
router.get('/', async function (req, res) {
  fetch('https://jobs.github.com/positions.json?page=1&search=code')
    .then(response => response.json())
    .then(data => {
      res.send(data)
    })
});

module.exports = router;
