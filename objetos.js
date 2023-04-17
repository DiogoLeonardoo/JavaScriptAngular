class pessoa { 
    constructor(nome,idade) {
        this.nome = nome;
        this.idade = idade;
        this.nascimento = 2023 - idade;
    }
    descrever() {
        console.log("Olá seu nome é " + this.nome + " e sua idade é " + this.idade)
    }
}

function compararPessoas(p1,p2) {
    if (p1.idade > p2.idade) {
        console.log(p1.nome + " é mais velho que " + p2.nome);
    } else if (p2.idade > p1.idade){ 
        console.log(p2.nome + " é mais velha que " + p1.nome);
    } else {
        console.log(p1.nome + " e " + p2.nome + " tem a mesma idade ");
    }
}

const diogo = new pessoa('Diogo', 29);
const marcela = new pessoa('Marcela', 19);


diogo.descrever();
marcela.descrever();
compararPessoas(diogo,marcela);




