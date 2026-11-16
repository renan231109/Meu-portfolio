const mysql = require('mysql2')

const conexao = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

conexao.getConnection((erro, connection) => {
    if (erro) {
        console.log('Erro ao conectar com o MySQL:', erro.message);
        return;
    }

    console.log('MySQL conectado com sucesso!');
    connection.release();
});

module.exports = conexao;