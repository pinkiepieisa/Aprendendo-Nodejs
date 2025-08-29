const express = require("express");
const app = express();
//Solicitando as rotas

//Criando as rotas do browser
app.get("/", function (req, res) {
    res.send("Seja bem vinda ao meu app!");
});

app.get("/sobre", function (req, res) {
    res.send("<h1> Minha página sobte! </h1>");
});

app.get("/forum", function (req, res) {
    res.send("Meu forum!");
})

//Criando parâmetros para a rota
app.get("ola/ :nome/ :cargo/ :situacao", function (req, res) {
    res.send("<h1> Olá " + req.params.nome + "</h1>"
        + "<h2> Seu cargo é: " + req.params.cargo + "</h2>" 
        + "<h3> Sua situação é: " + req.params.situacao + "</h3>");
});

app.listen(8081, function () {
    console.log("Servidor rodando na porta 8081!");
});