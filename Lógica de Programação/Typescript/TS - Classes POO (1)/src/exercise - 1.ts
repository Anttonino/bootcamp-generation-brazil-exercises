// Prompt Sync - Executar Javascript no terminal;
import PromptSync from "prompt-sync";
const prompt = PromptSync ()
/**
 * ATIVIDADE 1
 * Crie uma classe cliente e apresente os atributos e métodos referentes
 * a esta classe, em seguida crie um objeto cliente, defina as instâncias
 * deste objeto e apresente as informações deste objeto no console.
 */
class Cliente {
    // Atributos;
    private nome: string;
    private cpf: string;
    private sexo: string;
    // Método construtor;
    constructor (nome: string, cpf: string, sexo: string) {
        this.nome = nome;
        this.cpf = cpf;
        this.sexo = sexo;
    }
    // Método
    public get cliente_nome ():string{
        return 'Usuário: ' + this.nome + '\n' + 'CPF: ' + this.cpf + '\n' + 'Sexo: ' + this.sexo;
    }
}
// Iniciar o programa com o terminal limpo;
console.clear ();
// Entrada de dados;
console.log ('*****SISTEMA DE CADASTROS*****\n');
const nome = prompt ('Digite o seu nome: ') + '';
const cpf = prompt ('Digite o seu cpf: ') + '';
const sexo = prompt ('Digite o seu sexo: ') + '';
// Exibição dos dados;
console.clear ();
console.log ('*****CLIENTE*****');
const cliente = new Cliente (nome, cpf, sexo);
console.log (cliente.cliente_nome);
