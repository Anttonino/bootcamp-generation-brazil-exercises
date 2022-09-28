// Prompt Sync - Executar Javascript no terminal;
const prompt = require ('prompt-sync') ();
/**
 * ATIVIDADE 3
 * Faça um sistema que leia o tempo de duração de um evento em uma
 * fábrica expressa em segundos e mostre-o expresso em horas, minutos e segundos. 
 */
// Iniciar o programa com o terminal limpo;
console.clear ();
// Entrada de dados;
console.log ('*****DESCUBRA O TEMPO DE DURAÇÃO DO EVENTO*****');
const total_segundos = parseInt (prompt ('Digite o tempo do evento em segundos: '));
// Opereção
const horas = total_segundos / 3600;
const minutos = Math.floor (total_segundos % 3600) / 60;
const segundos = Math.floor (total_segundos % 3600) % 60;
// Exibição de dados
console.clear ();
console.log ('*****RESULTADO*****\n');
console.log (`O evento teve ${Math.round (horas)} horas, ${Math.round (minutos)} minutos e ${Math.round (segundos)} segundos`);
