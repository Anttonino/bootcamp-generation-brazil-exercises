// Prompt Sync - Executar Javascript no terminal;
import PromptSync from "prompt-sync";
const prompt = PromptSync ()
/**
 * ATIVIDADE 2
 * Crie uma classe avião e apresente os atributos e métodos referentes a esta classe, 
 * em seguida crie um objeto avião, defina as instâncias deste objeto e apresente as
 * informações deste objeto no console.
 */
class Aviao {
    // Atributos;
    public modelo: string;
    public ano: number;
    public passageiros: number;
    // Método construtor;
    constructor (modelo: string, ano: number, passageiros: number) {
        this.modelo = modelo;
        this.ano = ano;
        this.passageiros = passageiros;
    }
    // Método
    public cadastro () {
        return 'Modelo: ' + this.modelo + '\nAno: ' + this.ano + '\nEste avião suporta ' + this.passageiros + '     pessoas.'
    }
}
// Iniciar o programa com o terminal limpo;
console.clear ();
// Entrada de dados;
console.log ('*****SISTEMA DE CADASTROS AVIÕES*****\n');
const modelo = prompt ('Digite o modelo do avião: ') + '';
const ano = parseInt(prompt ('Digite o ano do avião: '));
const passageiros = parseInt (prompt ('Digite o número de passageiros: '));
// Exibição dos dados;
console.clear ();
console.log ('*****AVIÃO*****');
const aviao = new Aviao (modelo, ano, passageiros);
console.log (aviao.cadastro ());
