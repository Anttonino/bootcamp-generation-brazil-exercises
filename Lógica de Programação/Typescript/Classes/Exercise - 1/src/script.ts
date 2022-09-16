/*ATIVIDADE 1
 * Crie uma classe cliente e apresente os atributos e métodos referentes
 * a esta classe, em seguida crie um objeto cliente, defina as instâncias
 * deste objeto e apresente as informações deste objeto no console.
 */
class Cliente { //Declaração da classe
    private nome: string;
    private cpf: string;
    private sexo: string;

    constructor (nome: string, cpf: string, sexo: string) {
        this.nome = nome;
        this.cpf = cpf;
        this.sexo = sexo;
    }

    public getnome (): string{
        return this.nome + '\n' + this.cpf + '\n' + this.sexo;
    }
    
}

const nome = prompt ('Digite o seu nome') + '';
const cpf = prompt ('Digite o seu cpf') + '';
const sexo = prompt ('Digite o seu sexo') + '';

const cliente = new Cliente (nome, cpf, sexo);
console.log (cliente.getnome () );
document.write (cliente.getnome () );
