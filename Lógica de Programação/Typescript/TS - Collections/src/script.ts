import { mostrar_menu } from "./menu/mostrar_menu";
import { Menu } from "./menu/Menu";
import { adicionar } from "./functions/adicionar";
import { remover_item } from "./functions/remover";
import { atualizar_item } from "./functions/atualizar";
import { mostrar_estoque } from "./functions/mostrar_estoque";

const estoque: string[] = [];

let escolha: Menu | undefined;

console.clear ();
console.log ('*****SISTEMA DE ESTOQUE*****\n');

do { 

    escolha = mostrar_menu ();
    
    switch (escolha) {
        case Menu.adicionar:
            adicionar (estoque);
        break;

        case Menu.remover:
            remover_item (estoque);
        break;
        
        case Menu.atualizar:
            atualizar_item (estoque)
        break;

        case Menu.mostrar_todos:
            mostrar_estoque (estoque);
        break;

        case Menu.sair:
            console.log ('Sistema finalizado!\n')
        break;
    }

} while (escolha != Menu.sair)
