//insira o codigo aqui
var expressjs = require("express");

var aplicacao = expressjs();

aplicacao.get("/", hello);
aplicacao.get("/cursos", cursos);
aplicacao.get("/hora", retornaHora);


function hello(req, res) {
    res.send("<h1>Hello</h1>");
}

function cursos (req, res) {
    res.send("<ul><li> Programação básica </li> <li>Programação avançada</li></ul>");
}

function retornaHora (req, res) {
    res.send( " " + new Date().getHours() + ":" + new Date().getMinutes());
}
aplicacao.listen(8989);

console.log("rodando");