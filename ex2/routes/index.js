var express = require('express');
var router = express.Router();

var axios = require('axios').default

/* GET home page. */
router.get('/movimentos', function(req, res, next) {
  axios.get('http://localhost:3028/api/movimentos').then(value => {
    res.render('movimentos', { movimentos: value.data});
  }).catch( error => res.status(500).send("<p>Erro na obtenção dos movimentos.</p>"))
  
});

router.get('/pagamentos', function(req, res, next) {
  axios.get('http://localhost:3028/api/pagamentos').then(value => {
    res.render('pagamentos', {pagamentos: value.data});
  }).catch( error => res.status(500).send("<p>Erro na obtenção dos pagamentos.</p>"))
});


router.get('/movimentos/add', function(req, res, next) {
  res.render('addmovimento')
});

router.post('/movimentos/add', function(req,res,next){
  axios.post('http://localhost:3028/api/movimentos',req.body).then(value => {
    res.redirect('/movimentos');
  }).catch( error => res.status(500).send("<p>Erro na adição do movimento</p>"))
})

module.exports = router;
