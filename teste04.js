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

//Postagem.sync({force:true});

//Criando a tabela usuário
const Usuario = sequelize.define('usuario', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
});
Usuario.sync({force:true});

//Fazendo inserções no banco de dados
