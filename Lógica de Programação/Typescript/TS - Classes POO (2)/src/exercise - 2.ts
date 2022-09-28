// Prompt Sync - Executar Javascript no terminal;
import PromptSync from "prompt-sync";
const prompt = PromptSync ();
/**
 * ATIVIDADE 2
 * Crie uma classe conta bancária e apresente os atributos e métodos referentes a esta
 * classe, em seguida crie um objeto conta bancária, defina as instâncias deste
 * objeto e apresente as informações deste objeto no console.
 */
class Banco {
    // Atributos;
    public nome: string;
    public cpf: string;
    public saldo: number;
    public idade: number;
    // Método construtor;
    constructor (nome: string, cpf: string, saldo: number, idade: number) {
        this.nome = nome;
        this.cpf = cpf;
        this.saldo = saldo;
        this.idade = idade;
    }
}
// Iniciar o programa com o terminal limpo;
console.clear ();
// Objeto;
const diogo = new Banco ('Diogo Manhães', '123.456.789-10', 123473807284, 34);
// Exibição dos dados;
console.log ('*****CLIENTE*****');
console.log (`Nome: ${diogo.nome}\nCPF: ${diogo.cpf}\nIdade: ${diogo.idade} anos\nSaldo: R$${diogo.saldo}`);
