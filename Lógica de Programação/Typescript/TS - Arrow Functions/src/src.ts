// Prompt Sync - Executar Javascript no terminal;
import PromptSync from "prompt-sync";
const prompt = PromptSync ();
/**
 * ATIVIDADE 1
 * Crie uma um programa de saúde, nesse programa desenvolva uma Arrow functions que calcula
 * o imc de pacientes, a função deverá receber os  seguintes parâmetros, peso e altura.
 */

// Iniciar o programa com o terminal limpo;
console.clear ();
// Entreda de dados;
console.log ("*****CÁLCULO DO IMC*****")
const altura = Number (prompt ('Digite sua altura: '));
const peso = Number (prompt ('Digite seu peso: '));

// Arrow Function;
const imc = (peso: number, altura: number) => peso / Math.pow (altura, 2);
const resultado = imc (peso, altura);

console.clear ();
console.log ('*****RESULTADO*****');
console.log (`Seu indice de massa corporal é: ${resultado.toFixed (2)}`);
