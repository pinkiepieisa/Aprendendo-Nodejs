const express = require("express"); //Criação de rotas no browser
const site = express();

//Página principal
site.get("/", function (req, res) {
    res.send("Olá, esse é o meu site!")
});

site.get("/bemvindos", function (req, res) {
    res.send("Seja bem vindo!\nSeja bem vinda!")
});

site.listen(555, function () {
    console.log("Servidor rodando na porta 555!")
});