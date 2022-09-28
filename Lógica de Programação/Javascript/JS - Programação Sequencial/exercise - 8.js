// Prompt Sync - Executar Javascript no terminal;
const prompt = require ('prompt-sync') (); // Prompt sync, para rodar o código no terminal
/** 
 *ATIVIDADE 8
 * O custo ao consumidor de um carro novo é a soma do custo de fábrica
 * com a percentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). 
 * Supondo que a percentagem do distribuidor seja de 28% e os impostos de 45%, escrever 
 * um programa que leia o custo de fábrica de um carro e escreva o custo ao consumidor. 
 */
// Iniciar o programa com o terminal limpo;
console.clear ();
// Entrada de dados;
console.log ("*****CÁLCULO DO VALOR DO CARRO*****\n");
const valor = parseInt (prompt ('Digite o valor do carro: '));
//Operaçao
let distribuidora = (valor * 0.28)
let imposto = (valor * 0.45)
let carro = valor + distribuidora + imposto
// Exibição de dados
console.clear ();
console.log ('*****RESULTADO*****\n');
console.log (`O valor do imposto foi: R$${Math.floor (imposto)}`)
console.log (`O valor da distribuidora foi: R$${Math.floor (distribuidora)}`)
console.log (`O valor final do carro foi: R$${Math.floor (carro)}`)
