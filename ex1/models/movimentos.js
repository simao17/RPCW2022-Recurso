const mongoose = require('mongoose')

var movimentoSchema = new mongoose.Schema({
    Número: String,
    Tipo: String,
    Data: String,
    Valor: Number,
    Entidade: String,
    Descrição: String
})

module.exports = mongoose.model('movimentos',movimentoSchema)