class Cliente {
    constructor(nome, cpf, conta) {
        this.nome = nome;
        this.cpf = cpf;
        this.conta = conta;
    }
    ;
    setnome(nome) {
        this.nome = nome;
    }
    ;
    setcpf(cpf) {
        this.cpf = cpf;
    }
    ;
    setconta(conta) {
        this.conta = conta;
    }
    ;
    getnome() {
        return this.nome;
    }
    ;
    getcpf() {
        return this.cpf;
    }
    ;
    getconta() {
        return this.conta;
    }
    ;
    toString() {
        return `{Nome: ${this.nome}
        CPF: ${this.cpf}
        Conta: ${this.conta}}`;
    }
    ;
}
