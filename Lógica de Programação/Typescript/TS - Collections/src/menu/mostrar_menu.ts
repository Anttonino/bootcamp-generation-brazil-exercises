import PromptSync = require ("prompt-sync")
import {Menu} from "./Menu";

const prompt = PromptSync ();

let comando: number;

export function mostrar_menu () {
    do {
        console.log ('1 - Adicionar item');
        console.log ('2 - Remover item');
        console.log ('3 - Atualizar item');
        console.log ('4 - Mostrar estoque');
        console.log ('0 - sair');
    
        comando = Number(prompt('>> '));
    
        switch (comando) {
            case 1:
                return Menu.adicionar;
            case 2:
                return Menu.remover;
            case 3:
                return Menu.atualizar;
            case 4:
                return Menu.mostrar_todos;
            case 0:
                return Menu.sair;
            default:
                console.clear ();
                console.log ('Comando inválido');
        }
    
    }while (comando < 1 || comando > 5);
}
