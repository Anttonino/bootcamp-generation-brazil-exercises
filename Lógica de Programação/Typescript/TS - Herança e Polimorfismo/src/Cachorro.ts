import { Animal } from "./Animais";
import { iPodeCorrer } from "./iPodeCorrer"
import { iEmiteSom } from "./iEmiteSom";

class Cachorro extends Animal implements iPodeCorrer, iEmiteSom {
    public pode_correr: boolean;

    constructor (nome: string, idade: number, pode_correr: boolean) {
        super(nome, idade)
        this.pode_correr = pode_correr;
    }

    public emite_som(): void {
        console.log(`O Cachorro ${this.nome} late!`);
    }

    public corre(): void {
        console.log(`${this.nome} Começa a correr!`);
    }
}

export { Cachorro };