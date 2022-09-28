import { Animal } from "./Animais";
import { iPodeCorrer } from "./iPodeCorrer";
import { iEmiteSom } from "./iEmiteSom";

class Cavalo extends Animal implements iPodeCorrer, iEmiteSom {
    public pode_correr: boolean;

    constructor (nome: string, idade: number, pode_correr: boolean) {
        super (nome, idade);
        this.pode_correr = pode_correr;
    }

    public emite_som (): void {
        console.log (`O cavalo ${this.nome} começa a relinchar!`);
    }
    
    public corre (): void {
        console.log (`${this.nome} Começa a correr!`);
    }
}

export { Cavalo };