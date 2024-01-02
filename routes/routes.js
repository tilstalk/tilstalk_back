const express = require('express');
const router = express.Router();
const Cadastro = require('./models/models');

router.get('/sinais', async (req, res) => {
  try {
    let sinais = await Cadastro.find();
    res.status(200).json(sinais);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/sinais/:id', async (req, res) => {
    try {
      let sinais = await Cadastro.findById(req.params.id);
      res.status(200).json(sinais);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  

router.post('/sinais', async (req, res) => {
  try {
    const { id, nome, password } = req.body;

    // Verificar se a senha já existe
    const senhaExistente = await Cadastro.findOne({ password });
    if (senhaExistente) {
      return res.status(400).json({ message: 'A senha já existe' });
    }

    // Todos os dados estão válidos, pode prosseguir com o cadastro
    const cadastroNovo = new Cadastro(req.body);
    await cadastroNovo.save();
    res.status(201).json(cadastroNovo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/sinais/:id', async (req, res) => {
  console.log(req.body);
  try {
    const id = req.params.id;
    const novosDados = req.body;

    // Verificar se o livro com o ID existe
    const existenteId = await Cadastro.findOneAndUpdate({ id }, { $set: novosDados }, { new: true });

    if (!existenteId) {
      return res.status(404).json({ message: 'Id não encontrado' });
    }

    res.json(existenteId);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/sinais/:id', async (req, res) => {
  try {
    const cadastroEncontrado = await Cadastro.findOneAndDelete({ id: req.params.id });
    res.json({ message: 'Cadastro Deletado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
