const mongoose = require('mongoose')
var Pagamento = require('../models/pagamentos')

module.exports.listar = () => {
    return Pagamento
        .find()
        .exec()
}

module.exports.listarId = id => {
    return Pagamento
        .find({Fração: id})
        .exec()
}

module.exports.addPagamento = body => {
    return Pagamento
    .findByIdAndUpdate({Fração: body.fracao},{$set: {"body.mes": 1}})
    .exec()
}

module.exports.listarMes = mes => {
    return Pagamento
        .find({})
}