//insira o codigo aqui
//document.write("Pau no cu de quem ta lendo");
//var p = document.getElementById("paragrafo1");
//p.innerHTML = "Oi meninas turupom. "

var canvas = document.getElementById("canvas");
var papel = canvas.getContext("2d");

//window.location.reload();

var teclas = {
    Up: 38,
    Right: 39,
    Down: 40,
    Left: 37
}

var x = 50;
var y = 50;
var movimento = 15;
document.addEventListener("keydown", desenhaLinha);

function desenhaLinha(event){

    switch(event.keyCode){
        case teclas.Down:
            desenha("blue", x, y, x, y+movimento);
            y = y + movimento;
        break;
        case teclas.Up:
            desenha("black", x, y, x, y-movimento);
            y = y - movimento;
        break;
        case teclas.Right:
            desenha("red", x, y, x + movimento, y);
            x = x + movimento;
        break;
        case teclas.Left:
            desenha("yellow", x, y, x-movimento, y);
            x = x - movimento;
        break;
    }
}

function desenha(cor, xInicial, yInicial, xFinal, yFinal){
    papel.beginPath();
    papel.strokeStyle = cor;
    papel.lineWidth = 3;
    papel.moveTo(xInicial, yInicial);
    papel.lineTo(xFinal, yFinal);
    papel.stroke();
    papel.closePath();
}

