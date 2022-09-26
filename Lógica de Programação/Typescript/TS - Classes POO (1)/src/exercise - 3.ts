// Prompt Sync - Executar Javascript no terminal;
import PromptSync from "prompt-sync";
const prompt = PromptSync ();
/**
 * ATIVIDADE 3
 * Crie uma classe produto eletrônico e apresente os atributos e métodos referentes
 * a esta classe, em seguida crie um objeto produto eletrônico, defina as instâncias
 * deste objeto e apresente as informações deste objeto no console.
 */
class Produto {
    // Atributos;
    public nome: string
    public tag: string
    public ano: number
    public serie: string
    // Método construtor;
    constructor (nome: string, tag: string, ano: number, serie: string) {
        this.nome = nome;
        this.tag = tag;
        this.ano = ano;
        this.serie = serie;
    }
}
// Exibição dos dados;
console.clear ()//Iniciar o programa com o terminal limpo;
const produto = new Produto ('Samsung Galaxy S8', 'Celular', 2017, '6007041')
console.log ('*****CELULAR*****')
console.log (`Nome: ${produto.nome}\nTag: ${produto.tag}\nAno: ${produto.ano}\nSérie: ${produto.serie}`)

