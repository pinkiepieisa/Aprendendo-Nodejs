const express = require("express");
const site = express();

//Página principal
site.get("/", function (req, res) {
    res.send("Seja bem vindo!");
});

//Parâmetros na rota
site.get("/hihi/:nome", function (req, res) {
    res.send("<h1> Ola, " + req.params.nome + ". Como vai? </h1>");
});

site.listen(555, function () {
    console.log("Servidor de pé!");
});