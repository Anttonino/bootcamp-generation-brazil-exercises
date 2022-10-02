// Prompt Sync - Executar Javascript no terminal;
const prompt = require ('prompt-sync') ();
/**
 * ATIVIDADE 2
 * Ler 10 números e imprimir quantos são pares e quantos são ímpares. (FOR)
 */
// Iniciar o programa com o terminal limpo;
console.clear ();
console.log ('*****CONTADOR DE NÚMEROS IMPARES E PARES*****');
// Atribuições
let par = 0;
let impar = 0;

for (let i = 0; i < 10; i++) {
    // Entrada de dados;
    let numero = parseInt (prompt ('Digite um valor: '))
    // Operação;
    if (numero % 2 == 0) {
        par++;
    } else {
        impar++;
    }
}
// Exibição dos dados;
console.log (`Foram inseridos ${par} números pares`);
console.log (`Foram inseridos ${impar} números impares`);
