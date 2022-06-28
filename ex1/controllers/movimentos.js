const mongoose = require('mongoose')
var Movimento = require('../models/movimentos')

module.exports.listar = () => {
    return Movimento
        .find()
        .sort("-Data")
        .exec()
}

module.exports.listarTipo = (tipo) => {
    return Movimento
        .find({Tipo: tipo})
        .exec()
}

module.exports.listarEntidade = () => {
    return Movimento
        .aggregate([
            {$group: {_id: "$Entidade", total:{$sum:"$Valor"}}},
            {$project: {_id:0, Entidade: "$_id", Total: "$total"}}
        ])
        .exec()
}

module.exports.addMovimento = movimento => {
    var newMovimento = new Movimento(movimento)
    return newMovimento.save()
}