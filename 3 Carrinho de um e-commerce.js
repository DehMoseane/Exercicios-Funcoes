const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],

    imprimirResumo: function () {
        let totalItens = 0;
        let totalAPagar = 0;

        for (const produto of this.produtos) {
            totalItens += produto.qtd;
            totalAPagar += produto.qtd * produto.precoUnit;
        }

        console.log(`Cliente: ${this.nomeDoCliente}`);
        console.log(`Total de itens: ${totalItens} itens`);
        console.log(`Total a pagar: R$ ${(totalAPagar / 100).toFixed(2)}`);
    },

    addProduto: function (produto) {
        const produtoExistente = this.produtos.find(p => p.id === produto.id);

        if (produtoExistente) {
            produtoExistente.qtd += produto.qtd;
        } else {
            this.produtos.push(produto);
        }
    },

    imprimirDetalhes: function () {
        console.log(`Cliente: ${this.nomeDoCliente}\n`);
        for (let i = 0; i < this.produtos.length; i++) {
            const produto = this.produtos[i];
            console.log(`Item ${i + 1} - ${produto.nome} - ${produto.qtd} und - R$ ${(produto.qtd * produto.precoUnit / 100).toFixed(2)}`);
        }
        this.imprimirResumo();
    },

    calcularTotalDeItens: function () {
        let totalItens = 0;
        for (const produto of this.produtos) {
            totalItens += produto.qtd;
        }
        return totalItens;
    },

    calcularTotalAPagar: function () {
        let totalAPagar = 0;
        for (const produto of this.produtos) {
            totalAPagar += produto.qtd * produto.precoUnit;
        }
        return totalAPagar;
    },

    calcularDesconto: function () {
        const totalItens = this.calcularTotalDeItens();
        const totalAPagar = this.calcularTotalAPagar();

        let desconto = 0;
        if (totalItens > 4) {
            const produtoMaisBarato = this.produtos.reduce((min, produto) => (produto.precoUnit < min.precoUnit ? produto : min));
            desconto = produtoMaisBarato.precoUnit;
        }
        if (totalAPagar > 10000) {
            const descontoPorcentagem = totalAPagar * 0.1;
            desconto = Math.max(desconto, descontoPorcentagem);
        }

        return desconto;
    },

    imprimirResumoComDesconto: function () {
        const desconto = this.calcularDesconto();
        const totalAPagarComDesconto = this.calcularTotalAPagar() - desconto;

        console.log(`Cliente: ${this.nomeDoCliente}`);
        console.log(`Total de itens: ${this.calcularTotalDeItens()} itens`);
        console.log(`Total a pagar (com desconto): R$ ${(totalAPagarComDesconto / 100).toFixed(2)}`);
    }
};

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
};

carrinho.addProduto(novaBermuda);
carrinho.imprimirResumo();
carrinho.imprimirDetalhes();

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
};

carrinho.addProduto(novoTenis);
carrinho.imprimirResumoComDesconto();
