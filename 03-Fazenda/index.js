//insira o codigo aqui

var canvas = document.getElementById("canvas");
var papel = canvas.getContext("2d");

var fundo = {
    url: "./img/campo.png"
}

var totoro = {
    url: "./img/totoro.png"
}

fundo.imagem =  new Image();
fundo.imagem.src = fundo.url;
totoro.imagem =  new Image();
totoro.imagem.src = totoro.url;


fundo.imagem.addEventListener("load", carregaFundo);
fundo.imagem.addEventListener("load", carregaTotoro);

function carregaFundo() {
 papel.drawImage(fundo.imagem, 0, 0);
}


function carregaTotoro() {
    for(var i = 0; i < 10; i++) {
   papel.drawImage(totoro.imagem, numeroAleatorio(0, 400), numeroAleatorio(0, 400));
    }
}


function numeroAleatorio (x,y) {
    return Math.floor(Math.random() * (y - x) + 1) + x;
}