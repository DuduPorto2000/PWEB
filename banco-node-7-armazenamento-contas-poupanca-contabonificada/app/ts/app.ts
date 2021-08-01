let contaController = new ContaController();
let clienteController = new ClienteController();

const c1 = new Conta('1', 100);
const c2 = new Conta('2', 100);
const c3 = new Conta('3', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);

const rep = new Clientes();
const cliente1 = new Cliente('Eduardo','123456789', c1);
const cliente2 = new Cliente('Hayato','098765432',c2);
const cliente3 = new Cliente('Rin','234567890',c3);

rep.inserir(cliente1);
rep.inserir(cliente2);
rep.inserir(cliente3);
console.log(rep.listar());
console.log(rep.pesquisar('098765432'));
rep.remover('098765432');
console.log(rep.listar());