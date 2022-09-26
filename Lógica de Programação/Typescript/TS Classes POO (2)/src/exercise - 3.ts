// Prompt Sync - Executar Javascript no terminal;
import PromptSync from "prompt-sync";
const prompt = PromptSync ();
/**
 * ATIVIDADE 3
 * Crie uma classe paciente e apresente os atributos e métodos referentes a esta classe,
 * em seguida crie um objeto paciente, defina as instâncias deste objeto e apresente
 * as informações deste objeto no console.
 */
class Paciente {
    // Atributos;
    public nome: string;
    public cpf: string;
    public idade: number;
    public diagnostico: string
    // Método construtor;
    constructor (nome: string, cpf: string, idade: number, diagnostico: string) {
        this.nome = nome;
        this.cpf = cpf;
        this.idade = idade;
        this.diagnostico = diagnostico;
    }
}
// Iniciar o programa com o terminal limpo;
console.clear ();
// Objeto;
const diogo = new Paciente ('Diogo Manhães', '123.456.789-10', 34, 'contaminação viral não identificada');
// Exibição dos dados;
console.log ('*****DIAGNÓSTICO*****');
console.log (`Nome: ${diogo.nome}\nCPF: ${diogo.cpf}\nIdade: ${diogo.idade} anos\nDiagnóstico: ${diogo.diagnostico}`);
