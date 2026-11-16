require('dotenv').config();

const app = require('./app');
const conexao = require('./config/database');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`);
});