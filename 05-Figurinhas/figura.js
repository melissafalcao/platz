class figura {
    constructor(nome, origem, descricao, imagemUrl) {
        this.nome = nome;
        this.origem = origem;
        this.descricao = descricao;
        this.imagem = new Image(300, 300);
        this.imagem.src = imagemUrl;

    }

    falar() {
        alert("Meu nome é: " + this.nome);
    }

    exibir() {
        document.body.appendChild(this.imagem);
        document.write("<br></br>");
        document.write("Nome: " + this.nome);
        document.write("<br></br>");
        document.write("Origem: " + this.origem);
        document.write("<br></br>");
        document.write("Descrição: " + this.descricao);
        document.write("<br></br>");

    }
}