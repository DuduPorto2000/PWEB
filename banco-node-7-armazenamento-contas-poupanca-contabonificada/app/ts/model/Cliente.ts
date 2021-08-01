class Cliente{

    private  nome: string;
    private cpf: string;
    private conta: Conta



    constructor(nome:string, cpf:string, conta:Conta){
        this.nome = nome;
        this.cpf = cpf;
        this.conta = conta;
    };




    public setnome(nome:string): void{
        this.nome = nome;
    };
    public setcpf(cpf:string): void {
        this.cpf = cpf;
    };
    public setconta(conta:Conta){
        this.conta = conta;
    };
    public getnome(){
        return this.nome;
    };
    public getcpf(){
        return this.cpf;
    };
    public getconta(){
        return this.conta;
    };
    toString(){
        return `{Nome: ${this.nome}
        CPF: ${this.cpf}
        Conta: ${this.conta}}`;
    };
}