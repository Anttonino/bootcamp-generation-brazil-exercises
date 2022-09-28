import { Animal } from "./Animais";
import { iSubirArvore } from "./iSubirArvore";
import { iEmiteSom } from "./iEmiteSom";

class Preguiça extends Animal implements iSubirArvore, iEmiteSom {
    public subirArvore: boolean;

    constructor (nome: string, idade: number, subirArvore: boolean) {
        super(nome, idade)
        this.subirArvore = subirArvore;
    }

    public emite_som(): void {
        console.log(`A preguiça ${this.nome} começa a bramar!`);
    }
    
    public subir_arvore (): void {
        console.log(`${this.nome} começa a subir nas árvores!`);
    }
}

export { Preguiça };