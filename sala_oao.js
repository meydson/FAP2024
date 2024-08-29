// Classe Publica
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    getPreco() {
        return this.preco;
    }
}

function criarProduto() {
    const compra = new Produto("Mesa", 200);
    console.log(compra.nome);
    console.log(compra.getPreco())
}

// ENCAPSULAMENTO
// Para um atributo ou método privado, convencina-se o uso do "_" antes do nome da variável

class ProdutoPrivate {
    constructor(nome, preco) {
        this._nome = nome;
        this._preco = preco;
    }

    get retornarNome() {
        return this._nome;
    }

    get retornarPreco() {
        return this._preco;
    }

    set retornarPreco(preco) {
        this._preco = preco;
    }
}

function criarProdutoPrivado() {
    const produto = new ProdutoPrivate("Mesa", 200);

    console.log(produto.retornarNome);
    console.log(produto.retornarPreco);
    

    produto.retornarPreco = 400;
    console.log(produto.retornarPreco);
        
}

class Animal {
    constructor(nome,idade,patas){
        this.nome = nome;
        this.idade = idade;
        this.patas = patas;
    }

    corre() {
        return "sim";
    }

    dorme() {
        return "sim";
    }
}

class Cachorro extends Animal() {
    super(nome,idade,patas);
    constructor(raca) {
        this.raca = raca;
    }

    late() {
        return "alto";
    }
}

function heranca() {
    const dog = new Cachorro("Caramelo",10,4,"vira-lata");
    console.log(dog)
}