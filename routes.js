const express = require('express');
const router = express.Router();
const Exemplo = require("./models");

router.get("/sinal", (req, res) => {
  Exemplo.find()
    .then((sinal) => {
      res.json(sinal);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

router.post("/sinal", (req, res) => {
  const exemplo = new Exemplo(req.body);
  exemplo
    .save()
    .then(() => {
      res.status(201).json(exemplo);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

module.exports = router;