const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();


const conectarDados = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("conectado no banco de dados")
        return mongoose
    }
    catch (error) {
        console.error("Erro ao conectar ao banco de dados:", error);
        throw error;  // Rejeita a Promise em caso de erro para que seja tratado onde for chamado.
     }


};

module.exports = conectarDados;