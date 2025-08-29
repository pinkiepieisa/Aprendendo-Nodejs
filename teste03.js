const Sequelize = require('sequelize');
//Constante que irá armazenar as funcionalidades do sequelize
const sequelize = new Sequelize('projeto1', 'root', 'root', {
    host: "localhost",
    dialect: "mysql"
});
//Conectando o sequelize ao banco de dados criado no mysql, fornecendo todos os dados relacionados

/* Then é uma função de callback
ela é executada quando algum evento acontece
que é a sequelize.authenticate */

sequelize.authenticate().then(function() {
    console.log("Conectado com sucesso!")
}).catch(function(erro) {
    console.log("Falha ao se conectar: " + erro)
});
//Autenticando a conexão com o banco
//catch cria uma função para pegar o erro caso haja problemas na conexão