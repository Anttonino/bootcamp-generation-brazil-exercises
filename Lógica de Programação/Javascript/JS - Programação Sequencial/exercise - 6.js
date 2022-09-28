// Prompt Sync - Executar Javascript no terminal;
const prompt = require ('prompt-sync') ();
/** 
 * ATIVIDADE 6 
 * Construa um programa em que, tendo como dados de entrada dois pontos 
 * quaisquer no plano, P(x1, y1) e P(x2, y2), escreva a distância entre eles. 
 */
// Iniciar o programa com o terminal limpo;
console.clear ();
// Entrada de dados;
console.log ('*****CALCULE A DISTÂNCIA DO EIXO X E Y DO GRÁFICO*****\n');
console.log ('Distância = √(x2 - x1)² + (y2 - y1)²\n');
const x1 = parseInt (prompt ('Digite o valor de x1: '));
const y1 = parseInt (prompt ('Digite o valor de y1: '));
const x2 = parseInt (prompt ('Digite o valor de x2: '));
const y2 = parseInt (prompt ('Digite o valor de y2: '));
// Operação
let base_x = Math.pow (x2 - x1, 2);
let base_y = Math.pow (y2 - y1, 2);
let resultado = Math.sqrt (base_x + base_y);
// Exibição de dados
console.clear ();
console.log ('*****RESULTADO*****\n');
console.log (`O resultado da distância é: ${Math.floor (resultado)}`);
