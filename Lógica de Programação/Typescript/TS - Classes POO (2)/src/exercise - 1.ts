// Prompt Sync - Executar Javascript no terminal;
import PromptSync from "prompt-sync";
const prompt = PromptSync ();
/**
 * ATIVIDADE 1
 * Crie uma classe patinete e apresente os atributos e métodos referentes a esta classe,
 * em seguida crie um objeto patinete, defina as instâncias deste objeto e apresente
 * as informações deste objeto no console.
 */
class Patinete {
    // Atributos;
    public modelo: string;
    public valor: number;
    public ano: number;
    // Método construtor;
    constructor (modelo: string, valor: number, ano: number) {
        this.modelo = modelo;
        this.valor = valor;
        this.ano = ano;
    }
}
// Iniciar o programa com o terminal limpo;
console.clear ();
// Objeto;
const patinete = new Patinete ('Patinete Eletrico 350W', 1299.00, 2018);
// Exibição dos dados;
console.log ('*****PATINETE*****');
console.log (`Nome: ${patinete.modelo}\nValor: R$${patinete.valor}\nAno: ${patinete.ano}`);
