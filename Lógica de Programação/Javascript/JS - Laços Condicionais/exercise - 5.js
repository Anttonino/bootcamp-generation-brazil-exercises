// Prompt Sync - Executar Javascript no terminal;
const prompt = require('prompt-sync') ();
/**
 * ATIVIDADE 5
 * Crie um programa que leia um número do teclado até que encontre um número igual a
 * Zero. No final, mostre a soma dos números digitados.(DO...WHILE)
 */
// Atribuição
let soma = 0;
let numero = 0;

// Iniciar o programa com o terminal limpo;
console.clear ();

// Entrada de dados
numero = parseInt (prompt ('Digite um número do teclado: '));

do {
    // Entrada de dados 
    numero = parseInt (prompt ('Digite um número do teclado: '));
    // Operação condicional
    if (numero > 0) {
        soma += numero;
    }
// Condição de parada
} while (numero != 0);
// Exibição dos dados
console.log (`A soma dos valores foi: ${soma}`);