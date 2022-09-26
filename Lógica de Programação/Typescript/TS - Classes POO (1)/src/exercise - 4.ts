// Prompt Sync - Executar Javascript no terminal;
import PromptSync from "prompt-sync";
const prompt = PromptSync ();
/**
 * ATIVIDADE 4
 * Crie uma classe funcionário e apresente os atributos e métodos referentes
 * esta classe, em seguida crie um objeto funcionário, defina as instâncias
 * deste objeto e apresente as informações deste objeto no console.
 */
class Funcionaro {
    // Atributos;
    private nome: string;
    private cpf: string;
    private idade: number
    private sexo: string;
    private empresa: string;
    // Método construtor;
    constructor (nome: string, cpf: string, idade: number, sexo: string, empresa: string){
        this.nome = nome;
        this.cpf = cpf;
        this.idade = idade;
        this.sexo = sexo;
        this.empresa = empresa;
    }
    // Método
    public get information (): string { 
        return 'Nome: ' + this.nome + '\nCPF: ' + this.cpf + '\nIdade: ' + this.idade + '\nSexo: ' + this.sexo + '\nEmpresa: ' + this.empresa;
    }
}
// Iniciar o programa com o terminal limpo;
console.clear ();
// Entrada de dados;
console.log ('*****SISTEMA DE CADASTRO DE FUNCIONÁRIO*****')
const nome = prompt ('Digite seu nome: ')
const cpf = prompt ('Digite seu CPF: ')
const idade = parseInt (prompt ('Digite sua idade: '))
const sexo = prompt ('Digite seu sexo: ')
const empresa = prompt ('Digite o nome da empresa: ')
// Exibição dos dados;
console.clear ();
console.log ('*****FUNCIONÁRIO*****')
const cliente = new Funcionaro (nome, cpf, idade, sexo, empresa);
console.log (cliente.information);
