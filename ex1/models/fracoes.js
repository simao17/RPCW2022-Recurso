const mongoose = require('mongoose')

var fracaoSchema = new mongoose.Schema({
    Fração: String,
    Permilagem: Number,
    Mensalidade: Number
})

module.exports = mongoose.model('fracoes',fracaoSchema)