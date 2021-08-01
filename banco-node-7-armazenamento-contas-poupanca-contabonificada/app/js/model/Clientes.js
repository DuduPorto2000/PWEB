class Clientes {
    constructor() {
        this.clientes = new Array();
    }
    ;
    inserir(cliente) {
        this.clientes.push(cliente);
    }
    ;
    pesquisar(cpf) {
        return this.clientes.find(cliente => cliente.getcpf() === cpf);
    }
    ;
    remover(cpf) {
        const clienteRemove = this.pesquisar(cpf);
        if (clienteRemove) {
            const indiceCliente = this.clientes.indexOf(clienteRemove);
            if (indiceCliente > -1) {
                this.clientes.splice(indiceCliente, 1);
            }
        }
    }
    ;
    listar() {
        return this.clientes;
    }
    ;
}
