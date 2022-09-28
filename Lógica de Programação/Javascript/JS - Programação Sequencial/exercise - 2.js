// Prompt Sync - Executar Javascript no terminal;
const prompt = require ('prompt-sync') ();
/** 
 * ATIVIDADE 2 
 * Faça um sistema que leia a idade de uma pessoa expressa
 * em dias e mostre-a expressa em anos, meses e dias. 
 */
// Iniciar o programa com o terminal limpo;
console.clear ();
// Entrada de dados;
console.log ('*****DESCUBRA SUA IDADE*****');
const total_dias = parseInt (prompt ('Digite quantos dias você viveu: '));
// Operação
const anos = Math.floor (total_dias / 365);
const meses = Math.floor (total_dias % 365) / 30;
const dias = Math.floor (total_dias % 365) % 30;
// Exibição dos dados
console.clear ();
console.log ('*****RESULTADO*****\n');
console.log (`Você possui ${anos} anos, ${Math.round (meses)} meses e ${dias} dias de idade`);
