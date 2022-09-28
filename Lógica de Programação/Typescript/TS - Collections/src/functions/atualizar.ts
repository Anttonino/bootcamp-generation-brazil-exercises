import PromptSync from "prompt-sync";
import { mostrar_estoque } from "./mostrar_estoque";

const prompt = PromptSync ();

export function atualizar_item (estoque: string[]) {
    mostrar_estoque(estoque);
    console.log ('Digite o nome do item que deseja atualizar')
    const atualizar = prompt ('>> ')

    let verificar: boolean = false;

    estoque.forEach((item, index ) => {
        if (item == atualizar) {
        console.log ('Digite o nome do novo item')
        const novo_item = prompt ('>> ')

        estoque.splice(index, 1, novo_item);

        console.clear ();
        console.log (`O item ${atualizar} foi atualizado com sucesso agora se chama ${novo_item}\n`)

        verificar = true
        }
    })
    
    if (!verificar) {
        console.clear ();
        console.log (`O item ${atualizar} não foi encontrado no estoque`)
    } 

}