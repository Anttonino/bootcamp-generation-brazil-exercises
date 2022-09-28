// Prompt Sync - Executar Javascript no terminal;
const prompt = require ('prompt-sync') ();
/** 
 * ATIVIDADE 4
 * Escreva  um sistema que leia três números inteiros e positivos
 * (A, B, C) e calcule a seguinte expressão:
 * 
 * D = R + S / 2
 * R = (A + B)²
 * S = (B + C)²
 */
// Iniciar o programa com o terminal limpo;
console.clear ();
// Entrada de dados;
console.log ('*****CÁLCULO DA EXPRESSÃO*****\n');
console.log ('D = R + S / 2');
console.log ('Onde...');
console.log ('R = (A + B)²');
console.log ('S = (B + C)²\n');
const a = parseInt (prompt ('Digite o valor de A: '));
const b = parseInt (prompt ('Digite o valor de B: '));
const c = parseInt (prompt ('Digite o valor de C: '));
// Operação
let r = (a + b); 
r = Math.pow (r, 2);
let s = (b + c);
s = Math.pow(s, 2);
let d = (r + s) / 2;
// Exibição de dados
console.clear ();
console.log ('*****RESULTADO*****\n');
console.log (`\nA = ${a} | B = ${b} | C = ${c}\n`)
console.log(`O valor de R = ${r}`);
console.log(`O valor de S = ${s}`);
console.log(`O valor de D = ${d}`);
