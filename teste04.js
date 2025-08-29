const Sequelize = require('sequelize');
const sequelize = new Sequelize('projeto1', 'root', 'root', {
    host:"localhost",
    dialect: "mysql"
});
//Conecta o banco de dados ao vscode

//Criando uma tabela
const Postagem = sequelize.define('postagens', {
    //Criando o campo título
    titulo: {
        //O tipo STRING tem limite de caracter
        type: Sequelize.STRING
    },
    //O tipo TEXT é ilimitado no tamanho
    conteudo: {
        type: Sequelize.TEXT
    }
});

Postagem.sync({force:true});

