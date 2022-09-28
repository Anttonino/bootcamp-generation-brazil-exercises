// Prompt Sync - Executar Javascript no terminal;
const prompt = require ('prompt-sync') ();
/** 
 * ATIVIDADE 5
 * Faça um sistema que leia as 3 notas de um aluno e calcule a média final deste aluno. 
 * Considerar que a média é ponderada e que o peso das notas é: 2, 3 e 5, respectivamente. 
 */
// Iniciar o programa com o terminal limpo;
console.clear ();
// Entrada de dados;
console.log ('*****DESCUBRA SUA MÉDIA PONDERADA*****\n');
console.log ('Primeiro peso: 2,0 \nSegundo peso: 3,0\nTerceiro peso: 5,0\n');
const nota_1 = parseFloat (prompt ('Digite a primeira nota: '));
const nota_2 = parseFloat (prompt ('Digite a segunda nota: '));
const nota_3 = parseFloat (prompt ('Digite a terceira nota: '));
// Declaração de valores em variáveis
const peso_1 = 2;
const peso_2 = 3;
const peso_3 = 5;
// Operação
let media = (nota_1 * peso_1 + nota_2 * peso_2 + nota_3 * peso_3) / (peso_1 + peso_2 + peso_3);
// Exibição de dados
console.clear ();
console.log ('*****RESULTADO*****\n');
console.log (`A média ponderada do aluno é: ${media}`);
