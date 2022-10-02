// Prompt Sync - Executar Javascript no terminal;
const prompt = require('prompt-sync') ();
/**
 * ATIVIDADE 6
 * Escrever um programa que receba vários números inteiros no teclado. E no final imprimir
 * a média dos números múltiplos de 3. Para sair digitar 0(zero).(DO...WHILE)
 */

// Atribuição;
let media = 0;
let numero = 0;
let qtd = 0;

// Entrada de dados;
numero = parseInt(prompt('Digite um número do teclado: '));

do {
    // Entrada de dados
    numero = parseInt(prompt('Digite um número do teclado: '));
    // Operação condicional
    if (n % 3 == 0) {
        media += numero; 
        qtd++;
    }

} while (n != 0);
// Exibição de dados
console.log(`A media dos valores foi: ${media/qtd}`);
