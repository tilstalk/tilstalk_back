const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const cadastroSchema = new Schema({
  nome: String,
  password: String,
});

const Cadastro = mongoose.model('Cadastro', cadastroSchema);

module.exports = Cadastro;
