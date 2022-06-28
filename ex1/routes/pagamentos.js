var express = require('express');
var router = express.Router();
var Pagamento = require("../controllers/pagamentos")

router.get('/', function(req, res, next) {
  if(req.body.status){
    Pagamento.listarMes(req.body.status)
    .then(dados =>{
      res.status(200).jsonp(dados)
    })
    .catch(erro=>{
      res.status(500).jsonp({erro:erro})
    })
  }
  else{
    Pagamento.listar()
    .then(dados =>{
      res.status(200).jsonp(dados)
    })
    .catch(erro=>{
      res.status(500).jsonp({erro:erro})
    })
  }
});

router.get('/:id', function(req, res, next) {
  Pagamento.listarId(req.params.id)
  .then(dados =>{
    //res.status(200).jsonp(dados)
    fracao = dados[0].Fração
    mesesporpagar = Object.keys(dados[0]).filter(x => $dados[0][x] == null).length
    console.log(mesesporpagar)
    //Fracao.mensalidade(fracao)
    //.then(result =>{  
      
    //})
    //.catch(erro=>{
    //  res.status(500).jsonp({erro:erro})
    //})
  })
  .catch(erro=>{
    res.status(500).jsonp({erro:erro})
  })
});

router.post('/', function(req, res, next) {
  Pagamento.addPagamento(req.body)
  .then(dados =>{
    res.status(200).jsonp(dados)
  })
  .catch(erro=>{
    res.status(500).jsonp({erro:erro})
  })
});

module.exports = router;