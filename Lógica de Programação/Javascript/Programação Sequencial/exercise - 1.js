// Prompt Sync - Executar Javascript no terminal;
const prompt = require ('prompt-sync') ();
/**
 * ATIVIDADE 1
 * Faça um sistema que leia a idade de uma pessoa expressa em
 * anos, meses e dias e mostre-a expressa apenas em dias. 
 */
// Iniciar o programa com o terminal limpo;
console.clear ();
// Entrada de dados;
console.log ('*****DESCUBRA SUA IDADE*****');
const anos = parseInt (prompt ('Digite sua idade em anos: '));
const meses = parseInt (prompt ('Digite sua idade em meses: '));
const dias = parseInt (prompt ('Digite sua idade em dias: '));
// Opereção
const resultado = (anos * 365) + (meses * 30) + dias;
// Exibição de dados
console.clear ();
console.log ('*****RESULTADO*****');
console.log (`\nVocê viveu ${resultado} dias`);
