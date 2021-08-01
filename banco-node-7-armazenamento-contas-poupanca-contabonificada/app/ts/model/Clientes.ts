class Clientes{
    private clientes: Array<Cliente>;

    constructor(){
        this.clientes = new Array<Cliente>();
    };
    inserir(cliente: Cliente): void{
        this.clientes.push(cliente);
    };
    pesquisar(cpf:string): Cliente{
        return this.clientes.find(cliente => cliente.getcpf() === cpf);
    };
    remover(cpf:string): void{
        const clienteRemove = this.pesquisar(cpf);
        if (clienteRemove){
            const indiceCliente = this.clientes.indexOf(clienteRemove);
            if(indiceCliente > -1){
                this.clientes.splice(indiceCliente, 1);
            }
        }
    };
    listar(): Array<Cliente>{
        return this.clientes
    };





}