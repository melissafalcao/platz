
//insira o codigo aqui

var atena = new figura("Atena", "Grega", "Deusa da sabedoria", "./img/atena.png");
var kali = new figura("Kali", "Hindu", "Kali representa a Mãe Natureza. Seus quatro braços evocam a Criação, a Preservação, a Destruição e (o quarto) o dom da Salvação para aqueles que vão além da Natureza em busca do âmago Infinito. ", "./img/kali.png");
var isis = new figura("Isis", "Egípcia", "Acreditava-se que ela fosse a maga mais poderosa do universo, devido ao fato de ter aprendido o nome secreto de Rá com o próprio deus. Ela era a irmã e esposa de Osíris, irmã de Set e irmã gêmea de Nephthys.", "./img/isis.png");
var hela = new figura("Hela", "Nórdica", "Deusa dos mortos", "./img/hela.png");

var colfiguras = [];


colfiguras.push(atena);
colfiguras.push(kali);
colfiguras.push(isis);
colfiguras.push(hela);

for (var i = 0; i < colfiguras.length; i++) {
    
    colfiguras[i].exibir();
}