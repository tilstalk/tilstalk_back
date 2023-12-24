const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('olá, sou Node.js!')
});

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});

