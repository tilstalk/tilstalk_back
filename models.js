const mongoose = require("mongoose");

const Schema = mongo.Schema;

const baseSchema = new Schema({
  nome: String,
  cpf: Number,
});

const Exemplo = mongoose.model('Exemplo', exemploSchema);

module.exports = Base;
