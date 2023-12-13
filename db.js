const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost/nome_do_banco", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conectado ao MongoDB");
  })
  .catch((error) => {
    console.log("Error ao conectar o MongoDB", error);
  });
