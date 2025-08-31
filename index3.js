const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const Sequelize = require('sequelize');

//conexão com o banco de dados mysql
const sequelize = new Sequelize('projeto1', 'root', 'root', {

    host: "localhost",
    dialect: "mysql"

});

/* Configurando o motor de templates
Esse main carrega as configurações do html5 nas outras páginas */
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Configurando o body parser
const bodyParser = require('body-parser');
//usando o body parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

/* Rotas 
O método render só precisa do nome do arquivo do tipo handlebars */
app.get('/cad', function(req, res) {
    res.render('formulario');
});

/* Quando o botão do form for apertado
o método post manda para a rota add
informando que os dados foram recebidos
 */
app.post('/add', function(req, res) {
    res.send("Formulário recebido!" + "<br>" 
        + "Texto: " + req.body.titulo + "<br>"
        + "Conteúdo: " + req.body.conteudo);
});

//Código do formulário de soma
app.get('/formsoma', function(req, res) {
    res.render('soma');
});

function funcSomar(v1, v2) {
    return parseInt(v1) + parseInt(v2);
}

app.post('/somar', function(req, res) {
    res.send("O resultado é " + funcSomar(req.body.v1, req.body.v2));
});

app.listen(8081, function () {
    console.log("Servidor rodando na url http://localhost:8081");
});