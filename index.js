const express = require ('express');
const cors = require("cors")

require("dotenv").config()

const app = express();

app.use(cors())

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor está rodando na porta: ${port}`);
});

require("./banco de dados/db")