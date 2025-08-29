const express = require("express");
//Rota
const app = express();
//Variável que recebe a rota

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/html/pag01.html");
});
//A variável com a rota pega uma função que contém requisões e respostas

app.listen(3000, function() {
    console.log("Yes, queen!!!!");
});