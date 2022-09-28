import PromptSync from "prompt-sync";
import { mostrar_estoque } from "./mostrar_estoque"; //Importando a função

const prompt = PromptSync ();

export function adicionar (estoque: string[]) {
    mostrar_estoque(estoque);

    console.log('Digite o item: ');
    const item = prompt('>> ');

    estoque.push (item);

    console.clear ();
    console.log (`O item ${item} foi adicionado ao estoque!\n`)
}

