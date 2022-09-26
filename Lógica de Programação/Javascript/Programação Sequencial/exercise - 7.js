// Prompt Sync - Executar Javascript no terminal;
const prompt = require ('prompt-sync') (); // Prompt sync, para rodar o código no terminal
/**
 * ATIVIDADE 7
 * Um sistema de equações lineares do tipo:
 * 
 * X = ce - bf / ae - bd
 * Y = af - cd / ae bd
 */
// Iniciar o programa com o terminal limpo;
console.clear ();
// Entrada de dados;
console.log ('*****SISTEMA DE EQUAÇÕES LINEARES*****\n');
console.log ('Fórmula: \nX = ce - bf / ae - bd');
console.log ('Y = af - cd / ae bd\n');
const a = parseInt (prompt ('Digite o valor de A: '));
const b = parseInt (prompt ('Digite o valor de B: '));
const c = parseInt (prompt ('Digite o valor de C: '));
const d = parseInt (prompt ('Digite o valor de D: '));
const e = parseInt (prompt ('Digite o valor de E: '));
const f = parseInt (prompt ('Digite o valor de F: '));
// Operação
let x = (c * e - b * f) / (a * e - b * d);
let y = (a * f - c * d) / (a * e - b * d);
// Exibição de dados
console.clear ();
console.log ('*****RESULTADO*****\n');
console.log (`O valor de x: ${Math.round(x)} e o valor de ${Math.round(y)}`);
