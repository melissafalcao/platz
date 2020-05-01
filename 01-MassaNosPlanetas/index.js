//insira o codigo aqui
var gTerra = 9.8;
var gMarte = 3.7;
var gJupiter = 24.8;

var peso = prompt("Digite o peso do objeto na terra: ");
var planeta = prompt("Digite o nome de do planeta que deseja saber o peso: ");

var resultado = (peso/gTerra) * gMarte;
var resultado2 = (peso/gTerra) * gJupiter;

if (planeta == "marte") {
    
    document.write("O peso do objeto em Marte: " + resultado);
} else {

    document.write("O peso do objeto em Jupiter: " + resultado2);
}

