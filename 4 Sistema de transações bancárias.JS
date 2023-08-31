const contaBancaria = {
    titular: "Maria",
    saldo: 0,
    historico: [],

    depositar: function (valor) {
        this.saldo += valor;
        this.historico.push(`Depósito de $${valor}`);
        console.log(`Depósito de R$${valor} realizado para o cliente: ${this.titular}`);
    },

    sacar: function (valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            this.historico.push(`Saque de $${valor}`);
            console.log(`Saque de R$${valor} realizado para o cliente: ${this.titular}`);
        } else {
            console.log(`Saldo insuficiente para o saque de: ${this.titular}`);
        }
    },

    extrato: function () {
        console.log(`Extrato de ${this.titular} - Saldo: R$${this.saldo}`);
        console.log("Histórico:");
        for (const item of this.historico) {
            console.log(item);
        }
    }
};

contaBancaria.depositar(100);
console.log(contaBancaria.sacar(500));
console.log(contaBancaria.sacar(50));
console.log(contaBancaria.extrato(0));
