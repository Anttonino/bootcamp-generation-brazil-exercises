import PromptSync from "prompt-sync";
import { mostrar_estoque } from "./mostrar_estoque";
const prompt = PromptSync ();

export function remover_item (estoque: string[]) {
    mostrar_estoque(estoque);

    console.log ('Digite o nome do item que deseja remover');
    const remover = prompt ('>> ');

    let verificar: boolean = false

    estoque.forEach ((item,index) => {
        if (item == remover) {
            estoque.splice (index, 1, item);
            console.clear ();
            console.log(`O item ${remover} foi removido do estoque!\n`);

            verificar = true
        }
    })

    if (verificar == false) {
        console.clear ();
        console.log (`O item ${remover} não foi encontrado no estoque!\n`)
    }
}