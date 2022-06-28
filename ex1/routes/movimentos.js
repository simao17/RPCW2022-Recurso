var express = require('express');
var router = express.Router();
var Movimento = require("../controllers/movimentos")

router.get('/', function(req, res, next) {
    if(req.query.groupBy){
        if(req.query.groupBy == "entidade"){
            Movimento.listarEntidade(req.query.groupBy)
            .then(dados =>{
              res.status(200).jsonp(dados)
            })
            .catch(erro=>{
              res.status(500).jsonp({erro:erro})
            }) 
        }
        else if(req.query.groupBy){
            Movimento.listarTipo(req.query.groupBy)
            .then(dados =>{
              res.status(200).jsonp(dados)
            })
            .catch(erro=>{
              res.status(500).jsonp({erro:erro})
            }) 
        }
    }
    else {
        Movimento.listar()
        .then(dados =>{
          res.status(200).jsonp(dados)
        })
        .catch(erro=>{
          res.status(500).jsonp({erro:erro})
        })
    }
  
});

router.post('/', function(req, res, next) {
    Movimento.addMovimento(req.body)
    .then(dados =>{
      res.status(200).jsonp(dados)
    })
    .catch(erro=>{
      res.status(500).jsonp({erro:erro})
    })
});

module.exports = router;