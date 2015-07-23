var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Mega-Quiz',slogan:'¡Crea tus propios juegos de preguntas!' });
});

module.exports = router;
